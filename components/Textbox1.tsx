type TextBoxProps = {
  text: String;
  height?: String;
  width?: String;
};

export default function Textbox({
  text,
  height = "h-90",
  width = "w-130",
}: TextBoxProps) {
  return (
    <div
      className={`relative border-4 border-orange-400 rounded-3xl m-5 contain-content${height} ${width}`}
    >
      <div className="m-3">
        {text}
        Here is a long sample text you can use for your Textbox component:
        Throughout my journey as a developer, I have encountered a wide variety
        of challenges and opportunities that have shaped my skills and
        perspective. From my very first hackathon, where I nervously presented a
        simple project to a room full of strangers, to leading a team of
        passionate engineers on a complex, real-world application, each
        experience has contributed to my growth. I have learned that success is
        rarely a straight path; it is often filled with unexpected twists,
        setbacks, and moments of doubt. However, it is precisely these moments
        that have taught me the most—about perseverance, creative
        problem-solving, and the importance of collaboration. One of the most
        rewarding aspects of my journey has been the chance to mentor and
        support others. Whether it was helping a fellow student debug a stubborn
        piece of code, organizing workshops to introduce newcomers to the world
        of programming, or simply sharing my own story to inspire others, I have
        found immense satisfaction in giving back to the community that has
        given me so much. I believe that technology is at its best when it
        brings people together, empowers them to solve meaningful problems, and
        creates opportunities for growth and connection. Looking ahead, I am
        excited to continue exploring new technologies, tackling ambitious
        projects, and working alongside talented individuals who share my
        passion for innovation. I am particularly interested in the intersection
        of artificial intelligence, user experience, and social impact—areas
        where I believe thoughtful design and cutting-edge technology can make a
        real difference in people's lives. As I move forward, I remain committed
        to lifelong learning, open collaboration, and using my skills to create
        positive change in the world. If you are interested in connecting,
        collaborating, or simply sharing ideas, please feel free to reach out. I
        am always eager to meet new people, learn from different perspectives,
        and contribute to exciting new ventures. Thank you for taking the time
        to read my story, and I look forward to the adventures that lie ahead!
        Let me know if you want the text inserted directly into your code!
      </div>
    </div>
  );
}
