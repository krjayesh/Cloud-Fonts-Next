import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Success = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Success - Cloud Fonts For Faster Websites & Webapps</title>
          <meta
            name="description"
            content="Make your websites faster and beautiful fonts for free. Works with HTML, javascript and PHP websites."
          />
          <meta
            property="og:title"
            content="Success - Cloud Fonts For Faster Websites &amp; Webapps"
          />
          <meta
            property="og:description"
            content="Make your websites faster and beautiful fonts for free. Works with HTML, javascript and PHP websites."
          />
        </Head>
        <div className="container01">
          <div className="container02">
            <a
              href="https://gunesmuhittin.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="link"
            >
              <div className="container03 thqLink">
                <img
                  alt="image"
                  src="/playground_assets/artist-1200h.webp"
                  className="image"
                />
                <div className="container04">
                  <h1 className="text">Muhittin GÃ¼neÅ</h1>
                  <span className="text1">gunesmuhittin.com</span>
                </div>
              </div>
            </a>
          </div>
          <div className="container05">
            <div className="container06">
              <h1 className="text2">thanks for joining</h1>
              <h1 className="text3">
                Your response have been recorded. Will try to reply as soon we
                get online. Thaks for bieng part of us.
              </h1>
              <Link href="/">
                <a className="link1 thqButton thqLink">
                  <span>Homepage</span>
                  <img
                    alt="image"
                    src="/playground_assets/arrow-up-right%201.svg"
                    className="image1"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="container07">
          <div className="container08">
            <Link href="/">
              <a className="link2">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="image2 thqLink"
                />
              </a>
            </Link>
          </div>
          <div className="container09">
            <div className="container10">
              <Link href="/">
                <a className="link3 thqLink">Home</a>
              </Link>
              <Link href="/security">
                <a className="link4 thqLink">Security</a>
              </Link>
              <span className="text5">Request</span>
            </div>
            <div className="container11">
              <img
                alt="image"
                src="/playground_assets/twitter.svg"
                className="image3"
              />
              <img
                alt="image"
                src="/playground_assets/instagram.svg"
                className="image4"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #000000;
          }
          .container01 {
            flex: 0 0 auto;
            width: auto;
            height: 100vh;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .container02 {
            flex: 0 0 auto;
            width: 50vw;
            height: 100vh;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/playground_assets/fonts-1200h.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .link {
            display: contents;
          }
          .container03 {
            flex: 0 0 auto;
            height: 7.8431372549019605vh;
            display: flex;
            align-items: center;
            margin-left: 3.7vw;
            border-radius: 3.9215686274509802vh;
            margin-bottom: 8.8vh;
            flex-direction: row;
            justify-content: flex-start;
            text-decoration: none;
            background-color: #ffffff;
          }
          .image {
            height: 6.5359477124183005vh;
            object-fit: cover;
            margin-left: 0.35161744022503516vw;
            border-radius: var(--dl-radius-radius-round);
          }
          .container04 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: 1.1251758087201125vw;
            margin-right: 1.8284106891701828vw;
            flex-direction: column;
          }
          .text {
            font-size: 2vh;
            font-style: normal;
            margin-top: 0.26143790849673204vh;
            font-family: Poppins;
            font-weight: 500;
          }
          .text1 {
            color: #434343;
            font-size: 1.6993464052287581vh;
            font-style: normal;
            margin-top: 0.26143790849673204vh;
            font-family: Circular Std Book;
            font-weight: 400;
          }
          .container05 {
            flex: 0 0 auto;
            width: 50vw;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #000000;
          }
          .container06 {
            flex: 0 0 auto;
            width: 28.129395218002813vw;
            display: flex;
            align-items: flex-start;
            margin-bottom: 40vh;
            flex-direction: column;
            justify-content: flex-end;
          }
          .text2 {
            color: #ffffff;
            font-size: 2.8vh;
            font-style: normal;
            font-family: joyrideregular;
            font-weight: 100;
            margin-bottom: 2vh;
          }
          .text3 {
            color: #ffffff;
            font-size: 2.0915032679738563vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            margin-bottom: 6vh;
          }
          .link1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: 3.2679738562091503vh;
            font-size: 2.0915032679738563vh;
            font-style: normal;
            align-items: center;
            font-family: Circular Std Book;
            font-weight: 400;
            border-width: 0px;
            border-radius: 1.8300653594771241vh;
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
          }
          .image1 {
            height: 3.1372549019607843vh;
            object-fit: cover;
          }
          .container07 {
            top: 0px;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            display: flex;
            position: absolute;
            align-self: flex-start;
            margin-top: 8.8vh;
            align-items: center;
            padding-left: 3.7vw;
            padding-right: 3.7vw;
            flex-direction: row;
            justify-content: space-between;
          }
          .container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .link2 {
            display: contents;
          }
          .image2 {
            height: 3.4vh;
            object-fit: cover;
            text-decoration: none;
          }
          .container09 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container10 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link3 {
            color: rgba(255, 255, 255, 0.5);
            font-size: 2.091vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Circular Std Book;
            font-weight: 100;
            margin-right: 6.535vh;
            text-decoration: none;
          }
          .link3:hover {
            color: #ffffff;
          }
          .link4 {
            color: rgba(255, 255, 255, 0.5);
            font-size: 2.091vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Circular Std Book;
            font-weight: 100;
            margin-right: 6.535vh;
            text-decoration: none;
          }

          .text5 {
            color: #ffffff;
            font-size: 2.091vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 100;
            margin-right: 6.535vh;
          }
          .container11 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image3 {
            height: 3.2vh;
            object-fit: cover;
            margin-right: 3.4vh;
          }
          .image4 {
            height: 3.2vh;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default Success
