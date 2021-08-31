import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Security = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Security - Cloud Fonts For Faster Websites & Webapps</title>
          <meta
            name="description"
            content="Make your websites faster and beautiful fonts for free. Works with HTML, javascript and PHP websites."
          />
          <meta
            property="og:title"
            content="Security - Cloud Fonts For Faster Websites &amp; Webapps"
          />
          <meta
            property="og:description"
            content="Make your websites faster and beautiful fonts for free. Works with HTML, javascript and PHP websites."
          />
        </Head>
        <div className="container01">
          <h1 className="text">Security</h1>
          <div className="container02">
            <div className="container03">
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
            <div className="container04">
              <div className="container05">
                <Link href="/">
                  <a className="link1 thqLink">Home</a>
                </Link>
                <span className="text01">Security</span>
                <Link href="/request">
                  <a className="link2 thqLink">Request</a>
                </Link>
              </div>
              <div className="container06">
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
        </div>
        <div className="container07">
          <h1 className="text02">Industry standard encryption</h1>
          <span className="text03">
            <span>
              All traffic over our networks is TLS encrypted and all sensitive
              information like access tokens are encrypted at rest. Powered by
              Digicert CA and
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>ZeroSSL CA (Sectigoâs User Trust SSL).</span>
          </span>
        </div>
        <div className="container08">
          <h1 className="text06">SOC 2 and PCI compliant</h1>
          <span className="text07">
            <span>
              Server providers undergoes a SOC 2 type 2 audit annually,
              performed by an independent auditor. (Our enterprise customers can
              request a full audit
            </span>
            <span>
              {' '}
              report.) Servers are PCI compliant for all SAQ-A requirements to
              safely process credit card transactions.
            </span>
          </span>
        </div>
        <div className="container09">
          <h1 className="text10">Scalable DDoS mitigation</h1>
          <span className="text11">
            <span>
              Automatically detects and blocks malicious attacks.Regularly
              monitoring for traffic pattern anomalies and spikes, and
              effectively
            </span>
            <span>controls for them as needed.</span>
          </span>
        </div>
        <div className="container10">
          <h1 className="text14">Global Resiliency and Datacenter Security</h1>
          <span className="text15">
            <span>
              Server providers leverages globally-distributed data center
              partners that comply with leading security policies and
              frameworks.Prevent downtime
            </span>
            <span>with automatic failovers to the nearest region.</span>
          </span>
        </div>
        <div className="container11">
          <h1 className="text18">WAF and Penetration Testing</h1>
          <span className="text19">
            <span>
              Server providersâ security team keeps your sites online, regularly
              performs third-party penetration tests and engages the wider
              security community.
            </span>
          </span>
        </div>
        <div className="container12">
          <div className="container13">
            <h1 className="text21">Made with</h1>
            <img
              alt="image"
              src="/playground_assets/heart-emojie.svg"
              className="image3"
            />
            <h1 className="text22">by</h1>
            <a
              href="https://krjayesh.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
              className="link3"
            >
              <h1 className="text23 thqLink">Jayesh Kumar</h1>
            </a>
          </div>
          <div className="container14">
            <Link href="/security">
              <a className="link4 thqLink">Security</a>
            </Link>
            <span className="text24">Privacy</span>
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
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #000000;
          }
          .container01 {
            width: 100%;
            height: 33.98692810457516vh;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/security-bg-1200h.webp');
            background-position: center;
          }
          .text {
            color: #ffffff;
            font-size: 4.183006535947713vh;
            font-style: normal;
            font-family: joyrideregular;
            font-weight: 400;
            margin-left: 3.7vw;
            margin-bottom: 4.183006535947713vh;
          }
          .container02 {
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
          .container03 {
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
          .container04 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container05 {
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
            font-weight: 100;
            margin-right: 6.535vh;
            text-decoration: none;
          }
          .link1:hover {
            color: #ffffff;
          }
          .text01 {
            color: #ffffff;
            font-size: 2.091vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 100;
            margin-right: 6.535vh;
          }
          .link2 {
            color: rgba(255, 255, 255, 0.5);
            font-size: 2.091vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Circular Std Book;
            font-weight: 100;
            margin-right: 6.535vh;
            text-decoration: none;
          }
          .link2:hover {
            color: #ffffff;
          }
          .container06 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image1 {
            height: 3.2vh;
            object-fit: cover;
            margin-right: 3.4vh;
          }
          .image2 {
            height: 3.2vh;
            object-fit: cover;
          }
          .container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 14.77124183006536vh;
            align-items: flex-start;
            padding-left: 3.7vw;
            margin-bottom: 8.235294117647058vh;
            padding-right: 3.7vw;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text02 {
            color: #ffffff;
            font-size: 3.3986928104575163vh;
            font-style: normal;
            font-family: Circular Std Medium;
            font-weight: 500;
            margin-bottom: 1.5vh;
          }
          .text03 {
            color: #ffffff;
            font-size: 2.6143790849673203vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 100;
            line-height: 3.3vh;
          }
          .container08 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: 3.7vw;
            margin-bottom: 8.235294117647058vh;
            padding-right: 3.7vw;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text06 {
            color: #ffffff;
            font-size: 3.3986928104575163vh;
            font-style: normal;
            font-family: Circular Std Medium;
            font-weight: 500;
            margin-bottom: 1.5vh;
          }
          .text07 {
            color: #ffffff;
            font-size: 2.6143790849673203vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 100;
            line-height: 3.3vh;
          }
          .container09 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: 3.7vw;
            margin-bottom: 8.235294117647058vh;
            padding-right: 3.7vw;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text10 {
            color: #ffffff;
            font-size: 3.3986928104575163vh;
            font-style: normal;
            font-family: Circular Std Medium;
            font-weight: 500;
            margin-bottom: 1.5vh;
          }
          .text11 {
            color: #ffffff;
            font-size: 2.6143790849673203vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 100;
            line-height: 3.3vh;
          }
          .container10 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: 3.7vw;
            margin-bottom: 8.235294117647058vh;
            padding-right: 3.7vw;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text14 {
            color: #ffffff;
            font-size: 3.3986928104575163vh;
            font-style: normal;
            font-family: Circular Std Medium;
            font-weight: 500;
            margin-bottom: 1.5vh;
          }
          .text15 {
            color: #ffffff;
            font-size: 2.6143790849673203vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 100;
            line-height: 3.3vh;
          }
          .container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: 3.7vw;
            margin-bottom: 11.11111111111111vh;
            padding-right: 3.7vw;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text18 {
            color: #ffffff;
            font-size: 3.3986928104575163vh;
            font-style: normal;
            font-family: Circular Std Medium;
            font-weight: 500;
            margin-bottom: 1.5vh;
          }
          .text19 {
            color: #ffffff;
            font-size: 2.6143790849673203vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 100;
            line-height: 3.3vh;
          }
          .container12 {
            width: 100%;
            height: 100px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-left: 3.7974683544303796vw;
            padding-right: 3.7974683544303796vw;
            flex-direction: row;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/playground_assets/footer-1000h.webp');
            background-position: center;
          }
          .container13 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .text21 {
            color: #ffffff;
            font-size: 2.3529411764705883vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
          }
          .image3 {
            cursor: text;
            height: 2.6143790849673203vh;
            object-fit: cover;
            margin-left: 0.5vw;
            margin-right: 0.5vw;
          }
          .text22 {
            color: #ffffff;
            font-size: 2.3529411764705883vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
          }
          .link3 {
            display: contents;
          }
          .text23 {
            color: #ffffff;
            font-size: 2.3529411764705883vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Circular Std Book;
            font-weight: 400;
            margin-left: 0.3vw;
            text-decoration: none;
          }
          .text23:hover {
            color: rgba(255, 255, 255, 0.6);
          }
          .container14 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link4 {
            color: #ffffff;
            font-size: 2.3529411764705883vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Circular Std Book;
            font-weight: 400;
            margin-right: 2.5vw;
            text-decoration: none;
          }
          .link4:hover {
            color: rgba(255, 255, 255, 0.6);
          }
          .text24 {
            color: #ffffff;
            cursor: pointer;
            font-size: 2.3529411764705883vh;
            font-style: normal;
            transition: 0.3s;
            font-family: Circular Std Book;
            font-weight: 400;
          }
          .text24:hover {
            color: rgba(255, 255, 255, 0.6);
          }
        `}
      </style>
    </>
  )
}

export default Security
