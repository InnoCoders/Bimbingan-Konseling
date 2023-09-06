import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";



export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center  pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('./img/hero.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full  bg-black/5 bg-center" />
        {/* bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] */}
        <div className="max-w-8xl container relative mx-auto pl-[90px] ">
          <div className="flex flex-row items-center">
            <div className=" w-full px-4 text-left lg:w-1/2">
              <Typography
                variant="h1"
                color="white"
                className="mb-3 text-[60px] font-bold"
              >
                <span className="-mb-4 block text-xl font-thin text-blue-800">
                  Build ur dream
                </span>{" "}
                Bimbingan Konseling
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="-mt-4 ml-1 text-[19px] font-thin opacity-80"
              >
                Kami adalah tim konselor berpengalaman yang siap mendengarkan
                setiap ceritamu, membantu mengatasi tantangan hidup, dan
                memberikan bimbingan untuk meraih potensimu yang sebenarnya.
              </Typography>
              <Button className="mt-4 h-[3rem] w-[13rem] bg-blue-800 text-[15px]">
                Daftar Sekarang
              </Button>
            </div>
            <div className="w-full pr-10 lg:w-1/2">
              {/* <img src="./img/vektor1.png" width={500} className="mx-auto" /> */}
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32  h-[55rem] bg-[#ffffff] px-4 pb-20 pt-4">
        <div className="container mx-auto">
          {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
              ))}
            </div> */}
          <div className="h-[10rem]"></div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <img src="./img/vektor4.png" alt="" srcset="" />
            </div>
            <div className="mx-auto -ml-10 -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                About Us
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Bimbingan Konseling adalah platform layanan kesehatan mental
                daring yang siap membantu Anda dalam konsultasi yang aman dan
                nyaman. Kami menjamin kerahasiaan cerita kamu selama proses
                konseling bersama kami. Kepercayaanmu adalah hal yang kami jaga
                sepenuhnya! <br />
                <br />
                <i>
                  Ayo, jangan ragu untuk berbagi dan membuka cerita bersama{" "}
                  <br />
                  <b>Bimbingan Konseling Online!</b>
                </i>
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
          </div>
        </div>
        {/* <img
          src="./img/v1.png"
          className="absolute left-[6rem] top-[50rem] w-[8rem]"
        />
        <img
          src="./img/v4.png"
          className="absolute right-[0px] top-[74rem] w-[16rem]"
        /> */}
      </section>
      <section className="bg-[#6d8fd3] px-4 pb-48 pt-20">
        <div className="container mx-auto">
          <div className="flex">
            <div>
              <Typography variant="h1" color="white">
                Konsuler
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="-mt-1 ml-1 text-[19px] font-thin opacity-80"
              >
                Mau Mulai Konsultasi? Yuk Kenali konsuler Kami!
              </Typography>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-24">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mb-48 mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          {/* <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form> */}
        </div>
        {/* <img
          src="./img/v6.png"
          className="absolute -top-[9rem] right-[0px] w-[12rem]"
        />
        <img
          src="./img/v5.png"
          className="absolute left-[130px] top-[5rem] w-[12rem]"
        /> */}
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
