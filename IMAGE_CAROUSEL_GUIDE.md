# Image Carousel Guide (Page -> Component -> TypeScript)

This guide explains your current carousel implementation in this order:
1. High-level flow (starting from `app/page.tsx`)
2. Step-by-step inside `components/Imagecarousel.tsx`
3. TypeScript syntax you are using and how to write it yourself

## 1) High-level flow (starting from page)

In `app/page.tsx`, you use the carousel like this:

```tsx
<Imagecarousel boxWidth={560} boxHeight={360}>
  {profile.hackathonimg.map((s, idx) => (
    <Image
      key={s}
      src={s}
      alt={`Hackathon photo ${idx + 1}`}
      fill
      sizes="(max-width: 768px) 100vw, 40vw"
      className="object-cover"
      priority={idx === 0}
    />
  ))}
</Imagecarousel>
```

What happens:
1. `profile.hackathonimg` is an array of image paths.
2. `.map(...)` turns each path into a `next/image` slide.
3. Those slides are passed as `children` to `Imagecarousel`.
4. `boxWidth` and `boxHeight` set the visible image box size.
5. `Imagecarousel` handles:
   - slide index state
   - left/right navigation
   - optional autoplay
   - dots navigation
   - horizontal translate animation

## 2) Step-by-step inside `Imagecarousel.tsx`

### Step A: Props type

```tsx
type CarouselProps = {
  children: ReactNode;
  className?: string;
  boxWidth?: number | string;
  boxHeight?: number | string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  showDots?: boolean;
};
```

- `children: ReactNode` means the component accepts JSX inside opening/closing tags.
- `?` means optional prop.
- `number | string` means a union type (either one is valid).

### Step B: Function props + defaults

```tsx
export default function ImageCarousel({
  children,
  className = "",
  boxWidth = "min(92vw, 520px)",
  boxHeight = 320,
  autoSlide = true,
  autoSlideInterval = 3000,
  showDots = true,
}: CarouselProps) {
```

- This is object destructuring in parameters.
- Defaults are set directly in the destructuring.
- `: CarouselProps` enforces prop types.

### Step C: Convert children to slides

```tsx
const slides = useMemo(() => React.Children.toArray(children), [children]);
```

- `React.Children.toArray` normalizes children into a safe array.
- `useMemo` avoids rebuilding this array unless `children` changes.

### Step D: State

```tsx
const [curr, setCurr] = useState(0);
const [isPaused, setIsPaused] = useState(false);
```

- `curr`: current slide index.
- `isPaused`: pause autoplay while user interacts.

### Step E: Navigation handlers

`prev` and `next` update `curr` with wrap-around logic:
- from first -> previous goes to last
- from last -> next goes to first

They use functional updates:

```tsx
setCurr((c) => { ...return newIndex; });
```

This guarantees you use the latest state.

### Step F: Safe index + size conversion

```tsx
const safeCurr = curr >= slides.length ? 0 : curr;
const resolvedWidth = typeof boxWidth === "number" ? `${boxWidth}px` : boxWidth;
const resolvedHeight = typeof boxHeight === "number" ? `${boxHeight}px` : boxHeight;
```

- `safeCurr` prevents invalid indexes.
- If width/height is numeric, convert to CSS pixels.

### Step G: Autoplay effect

```tsx
useEffect(() => {
  if (!autoSlide || isPaused || slides.length <= 1) return;
  const id = setInterval(next, autoSlideInterval);
  return () => clearInterval(id);
}, [autoSlide, autoSlideInterval, isPaused, next, slides.length]);
```

- Starts interval only when autoplay is allowed.
- Cleans up interval to prevent memory leaks.
- Dependency array keeps behavior correct when values change.

### Step H: Render structure

1. Outer container gets fixed size from props:
   - `style={{ width: resolvedWidth, height: resolvedHeight }}`
2. Track is a `flex` row of full-width slides.
3. Move track with:
   - `transform: translateX(-${safeCurr * 100}%)`
4. Each slide uses:
   - `className="relative h-full w-full shrink-0"`
   - important for `next/image fill` (needs positioned parent with real size).

### Step I: Controls

- Arrow buttons call `prev` / `next`.
- Dot buttons call `setCurr(i)`.
- Controls render only when slide count > 1.

## 3) TypeScript syntax primer (from your code)

### A) `type` alias

```ts
type CarouselProps = { ... };
```

Use this to define object shapes for props.

### B) Optional property `?`

```ts
className?: string;
```

Means prop can be omitted.

### C) Union types

```ts
boxWidth?: number | string;
```

Means value can be a number OR a string.

Examples:
- `boxWidth={560}` (number)
- `boxWidth="80vw"` (string)

### D) Type annotation on function params

```ts
function ImageCarousel(props: CarouselProps) { ... }
```

You use a destructured version, but same concept:

```ts
function ImageCarousel({ ... }: CarouselProps) { ... }
```

### E) Type narrowing with `typeof`

```ts
typeof boxWidth === "number" ? `${boxWidth}px` : boxWidth
```

TypeScript understands:
- true branch: `boxWidth` is number
- false branch: `boxWidth` is string

### F) Generic inference in hooks

```ts
useState(0)      // inferred as number
useState(false)  // inferred as boolean
```

If needed, you can be explicit:

```ts
const [curr, setCurr] = useState<number>(0);
```

### G) ReactNode

```ts
children: ReactNode;
```

`ReactNode` is "anything React can render":
- JSX
- strings
- numbers
- fragments
- arrays of elements

## 4) How to use this component correctly

### Basic

```tsx
<Imagecarousel boxWidth={560} boxHeight={360}>
  {/* slides */}
</Imagecarousel>
```

### Responsive size

```tsx
<Imagecarousel boxWidth="min(95vw, 700px)" boxHeight="420px">
  {/* slides */}
</Imagecarousel>
```

### With custom options

```tsx
<Imagecarousel
  boxWidth={640}
  boxHeight={400}
  autoSlide
  autoSlideInterval={2500}
  showDots
>
  {/* slides */}
</Imagecarousel>
```

## 5) Mental model to remember

1. Page creates slides (`map` over image paths).
2. Slides are passed as `children`.
3. Carousel sets the viewport box size.
4. Track moves left/right by index using translateX.
5. TypeScript keeps props and values safe (types + narrowing + optional props).
