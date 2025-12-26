import React from 'react'

export const metadata = {
  title: "Mohan's Resume",
};

const Resume = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <object
        data="/files/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p className="flex flex-row min-h-screen justify-center items-center">
          Unable to display PDF file.&nbsp;
          <span className="underline text-cyan-200">
            <a href="/files/resume.pdf">Download</a> instead.
          </span>
        </p>
      </object>
    </div>
  )
}

export default Resume