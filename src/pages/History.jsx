import React from "react";
import Title from "../components/Title";
import { useScrollTo } from "../hooks/useScrollTo";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";

export const History = () => {
  useScrollTo();

  return (
    <>
      <Helmet>
        <title>Juan Eulufi Salazar | History</title>
        <meta
          name="description"
          content="Historia de como Juan Eulufi se adentro al mundo de la programacion."
        />
        <meta
          name="keywords"
          content="Historia de Juan Eulufi con el mundo de la programacion y un poco de su vida."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://nitodev.netlify.app/history" />
        <meta name="author" content="Juan Eulufi" />
        <meta name="publisher" content="Juan Eulufi" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Juan Eulufi Salazar | History" />
        <meta
          property="og:description"
          content="Historia de Juan Eulufi con el mundo de la programacion y un poco de su vida."
        />
        <meta property="og:url" content="https://nitodev.netlify.app/history" />
        <meta
          property="og:image"
          content="https://bafybeiflsbfx4bikx6xp3y4bosckczjk4wtqawqgl6sg2t46chv7m2r33m.ipfs.w3s.link/foto-me.jpg"
        />

        <meta name="twitter:title" content="Juan Eulufi Salazar | History" />
        <meta
          name="twitter:description"
          content="Historia de Juan Eulufi con el mundo de la programacion y un poco de su vida."
        />
        <meta
          name="twitter:image"
          content="https://bafybeiflsbfx4bikx6xp3y4bosckczjk4wtqawqgl6sg2t46chv7m2r33m.ipfs.w3s.link/foto-me.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="pt-[4rem] md:pt-20">
        <div className="flex flex-col mb-10 mx-3">
          <div className="flex justify-center items-center">
            <div className="flex flex-col w-full md:w-8/12">
              <Title>History</Title>
              <div className=" bg-[#f5efe8] text-center p-3 my-3 rounded-md dark:bg-[#313133]">
                <Typewriter
                  words={[
                    "Hello, my name is Juan Eulufí and I am a Software Developer.",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={10}
                  delaySpeed={3000}
                />
              </div>
              <div data-aos="fade-up" data-aos-duration="2300">
                <p className="max-w-xl text-justify pt-3 mb-1 indent-3 lg:indent-5 text-stone-800 dark:text-stone-200">
                  I was born in Cauquenes, Maule region, Chile in 2002, since I
                  was a child I was always interested in the world of computers,
                  I remember I had a computer that looked like an old TV in
                  which I could spend all afternoon on it without noticing, I
                  remember I had a friend who was more adult than me, I always
                  saw him programming and it caught my attention, but at that
                  time I did not understand anything, nor understood what was
                  the word "program".
                </p>
                <p className="max-w-xl text-justify mb-1 indent-3 lg:indent-5 text-stone-800 dark:text-stone-200">
                  Time passed and I got a computer with an Intel Celeron, but it
                  was my first computer, I remember that I was super anxious to
                  receive it, I remember that I always watched videos on YouTube
                  to add extra features to the computer and make it stand out
                  from others.
                </p>
                <p className=" max-w-xl mb-1 text-justify    indent-3 lg:indent-5 text-stone-800 dark:text-stone-200">
                  Then with the passage of time I entered the career programmer
                  analyst in which I have no regrets because I could know the
                  world of programming more thoroughly, I remember that arriving
                  after high school I always saw more than any video on YouTube
                  to not stay only with the subject that teachers passed, in
                  that area I always felt confident in the evaluations that
                  touched me because I always felt that I saw that subject on
                  the internet. Once I had to do the "Advanced Programming"
                  course, I thought it would be difficult, but I realized that
                  in reality it was not as difficult as I thought and this
                  allowed me to interact with people because I did not spend so
                  much time studying, since I was doing quite well, this allowed
                  me to have a quieter life and thanks to this I met a wonderful
                  person who encourages me every day to keep improving myself
                  and keep improving my programming skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
