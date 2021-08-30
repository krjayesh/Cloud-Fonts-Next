import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const RequestAddFonts = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Request Custom Fonts - CloudFonts Beta</title>
          <meta
            name="description"
            content="Get your custom fonts on our fonthosting for free. Drop a message, and we will add it soon."
          />
          <meta
            property="og:title"
            content="Request Custom Fonts - CloudFonts Beta"
          />
          <meta
            property="og:description"
            content="Get your custom fonts on our fonthosting for free. Drop a message, and we will add it soon."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/bd581eaa-d044-49a4-b328-2bc427fcf4f9/2f11f3f1-7e4b-47a3-a00f-8728c3c31275?org_if_sml=1"
          />
        </Head>
        <div className="container01">
          <div className="container02">
            <Link href="/">
              <a className="link">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="image thqLink"
                />
              </a>
            </Link>
          </div>
          <div className="container03">
            <div className="container04">
              <Link href="/">
                <a className="link1 thqLink">Home</a>
              </Link>
              <span className="text">Security</span>
              <span className="text1">Request</span>
            </div>
            <div className="container05">
              <img
                alt="image"
                src="/playground_assets/twitter.svg"
                className="image1"
              />
              <img
                alt="image"
                src="/playground_assets/instagram.svg"
                className="image2"
              />
            </div>
          </div>
        </div>
        <div className="container06">
          <div className="container07">
            <a
              href="https://gunesmuhittin.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="link2"
            >
              <div className="container08 thqLink">
                <img
                  alt="image"
                  src="/playground_assets/artist-1200h.webp"
                  className="image3"
                />
                <div className="container09">
                  <h1 className="text2">Muhittin Güneş</h1>
                  <span className="text3">gunesmuhittin.com</span>
                </div>
              </div>
            </a>
          </div>
          <div className="container10">
            <form name="requestfont" method="POST" className="form" data-netlify="true">
              <input type="hidden" name="requestfont" value="requestfont" />
              <input
                type="text"
                id="name"
                name="name"
                required="true"
                placeholder="Your Name"
                className="textinput thqTextInput"
              />
              <input
                type="email"
                id="email"
                name="email"
                required="true"
                placeholder="Your Email"
                className="textinput1 thqTextInput"
              />
              <input
                type="text"
                id="font family"
                name="font family"
                required="true"
                placeholder="Font Family Name"
                className="textinput2 thqTextInput"
              />
              <input
                type="link"
                id="fontlink"
                name="fontlink"
                required="true"
                placeholder="Font Website"
                className="textinput10 thqTextInput"
              />
              <button name="submit" type="submit" className="button thqButton">
                <span>Send Request</span>
                <img
                  alt="image"
                  src="/playground_assets/arrow-up-right%201.svg"
                  className="image4"
                />
              </button>
            </form>
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
          .container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .link {
            display: contents;
          }
          .image {
            height: 3.4vh;
            object-fit: cover;
            text-decoration: none;
          }
          .container03 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container04 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link1 {
            color: rgba(255, 255, 255, 0.5);
            font-size: 2.091vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Circular Std Book;
            font-weight: 400;
            margin-right: 6.535vh;
            text-decoration: none;
          }
          .link1:hover {
            color: #ffffff;
          }
          .text {
            color: rgba(255, 255, 255, 0.5);
            font-size: 2.091vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Circular Std Book;
            font-weight: 400;
            margin-right: 6.535vh;
          }
          .text:hover {
            color: #ffffff;
          }
          .text1 {
            color: #ffffff;
            font-size: 2.091vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            margin-right: 6.535vh;
          }
          .container05 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image1 {
            height: 3.4vh;
            object-fit: cover;
            margin-right: 3.4vh;
          }
          .image2 {
            height: 3.4vh;
            object-fit: cover;
          }
          .container06 {
            flex: 0 0 auto;
            width: auto;
            height: 100vh;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .container07 {
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
          .link2 {
            display: contents;
          }
          .container08 {
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
          .image3 {
            height: 6.5359477124183005vh;
            object-fit: cover;
            margin-left: 0.35161744022503516vw;
            border-radius: var(--dl-radius-radius-round);
          }
          .container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: 1.1251758087201125vw;
            margin-right: 1.8284106891701828vw;
            flex-direction: column;
          }
          .text2 {
            font-size: 2vh;
            font-style: normal;
            margin-top: 0.26143790849673204vh;
            font-family: Poppins;
            font-weight: 500;
          }
          .text3 {
            color: #434343;
            font-size: 1.6993464052287581vh;
            font-style: normal;
            margin-top: 0.26143790849673204vh;
            font-family: Circular Std Book;
            font-weight: 400;
          }
          .container10 {
            flex: 0 0 auto;
            width: 50vw;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #000000;
          }
          .form {
            width: 28.129395218002813vw;
            margin-bottom: 12.418300653594772vh;
          }
          .textinput {
            color: #ffffff;
            width: 100%;
            outline: none;
            font-size: 2.0915032679738563vh;
            transition: 0.3s;
            font-family: Circular Std Book;
            padding-top: 3.2679738562091503vh;
            border-width: 0px;
            padding-left: 2.250351617440225vw;
            border-radius: 1.8300653594771241vh;
            margin-bottom: 4.705882352941177vh;
            padding-right: 2.250351617440225vw;
            padding-bottom: 3.2679738562091503vh;
            background-color: #333333;
          }
          .textinput:focus {
            color: #000000;
            background-color: #ffffff;
          }
          .textinput1 {
            color: #ffffff;
            width: 100%;
            outline: none;
            font-size: 2.0915032679738563vh;
            transition: 0.3s;
            font-family: Circular Std Book;
            padding-top: 3.2679738562091503vh;
            border-width: 0px;
            padding-left: 2.250351617440225vw;
            border-radius: 1.8300653594771241vh;
            margin-bottom: 4.705882352941177vh;
            padding-right: 2.250351617440225vw;
            padding-bottom: 3.2679738562091503vh;
            background-color: #333333;
          }
          .textinput1:focus {
            color: #000000;
            background-color: #ffffff;
          }
          .textinput2 {
            color: #ffffff;
            width: 100%;
            outline: none;
            font-size: 2.0915032679738563vh;
            transition: 0.3s;
            font-family: Circular Std Book;
            padding-top: 3.2679738562091503vh;
            border-width: 0px;
            padding-left: 2.250351617440225vw;
            border-radius: 1.8300653594771241vh;
            margin-bottom: 4.705882352941177vh;
            padding-right: 2.250351617440225vw;
            padding-bottom: 3.2679738562091503vh;
            background-color: #333333;
          }
          .textinput2:focus {
            color: #000000;
            background-color: #ffffff;
          }
          
          }
          .textinput10 {
            color: #ffffff;
            width: 100%;
            outline: none;
            font-size: 2.0915032679738563vh;
            transition: 0.3s;
            font-family: Circular Std Book;
            padding-top: 3.2679738562091503vh;
            border-width: 0px;
            padding-left: 2.250351617440225vw;
            border-radius: 1.8300653594771241vh;
            margin-bottom: 4.705882352941177vh;
            padding-right: 2.250351617440225vw;
            padding-bottom: 3.2679738562091503vh;
            background-color: #333333;
          }
          .textinput10:focus {
            color: #000000;
            background-color: #ffffff;
          }
          
          .button {
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
          }
          .image4 {
            height: 3.1372549019607843vh;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default RequestAddFonts
