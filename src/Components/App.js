import React, { useEffect, useState } from 'react';
import MainSection from './Main';
import Toolbar from './Toolbar';
import { getDatabase, get, ref } from 'firebase/database';
import { Helmet } from 'react-helmet';


const App = ({ firebaseApp }) => {

  const contactsDefault = {
    github: { url: "#" },
    ig: { url: "#" },
    email: { url: "#" },
    linkedin: { url: "#" },
    resume: { url: "#" },
  }

  const aboutDefault = {
    job: "#",
    org: "#"
  }

  const [contacts, setSocial] = useState(contactsDefault)
  const [about, setAbout] = useState(aboutDefault)
  const db = getDatabase(firebaseApp)
  const contactsRef = ref(db, "/Contacts")
  const aboutRef = ref(db, "/About")

  function downloadMetaData() {
    get(contactsRef).then((data) => {
      if (contacts.email.url != "#") return

      setSocial(data.val())
    })

    get(aboutRef).then((data) => {
      if (about.job != "#") return

      setAbout(data.val())
    })

  }

  useEffect(() => {
    return downloadMetaData()
  }, [contacts, about]);

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <link rel='icon' href="%PUBLIC_URL%/favicon.ico" />
        <meta name="description" content="Antonio Calabrese personal website and portfolio" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#0b192f" />
        <meta name="msapplication-navbutton-color" content="#0b192f" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0b192f" />
        <meta property="og:title" content="Antonio Calabrese" />
        <meta property="og:description" content="Personal website and portfolio." />
        {/* <meta property="og:image" content="">  */}
        <meta property="og:url" content="https://antoniocalabrese.dev/" />
        <meta property="og:site_name" content="Antonio Calabrese" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        {/* Notice the use of %PUBLIC_URL% in the tags above.
        It will be replaced with the URL of the `public` folder during the build.
        Only files inside the `public` folder can be referenced from the HTML.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`. */}

        <title>Antonio Calabrese</title>
        {/* Google Search structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Antonio Calabrese",
              "url": "https://antoniocalabrese.dev/",
              "sameAs": [
              "https://www.linkedin.com/in/ancalabrese/",
              "https://www.instagram.com/antonio_bust/",
              "https://twitter.com/antonioBust91",
              "https://github.com/ancalabrese",
              "https://medium.com/@ancalabrese"
              ]
            }
        `}
        </script>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet" />


      </Helmet >
      <div className="top-0 left-0 bg-primary min-h-screen flex flex-col">
        <header className='sticky top-0 z-[99] grow-0 shrink-0'>
          <Toolbar contacts={contacts} />
        </header>
        <MainSection social={contacts} about={about} />
      </div>
    </>
  );
}

export default App;
