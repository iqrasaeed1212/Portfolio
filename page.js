'use client';

export default function Home() {
  return (
    <main style={{fontFamily:'sans-serif', padding:'40px', background:'#0b0f1a', color:'white', minHeight:'100vh'}}>
      <div style={{maxWidth:'800px', margin:'auto', textAlign:'center'}}>
        <h1 style={{fontSize:'48px'}}>Iqra Khan</h1>
        <p style={{color:'#aaa'}}>Full Stack Developer (.NET | React | Angular)</p>

        <div style={{marginTop:'20px'}}>
          <a href='mailto:iqra3420@gmail.com' style={{margin:'10px', color:'white'}}>Email</a>
          <a href='https://github.com/iqrasaeed1212' style={{margin:'10px', color:'white'}}>GitHub</a>
          <a href='https://www.linkedin.com/in/hafiza-iqra-saeed-103b58141' style={{margin:'10px', color:'white'}}>LinkedIn</a>
        </div>

        <section style={{marginTop:'50px'}}>
          <h2>Projects</h2>
          <p>ARVO Project</p>
          <p>EMS System</p>
        </section>
      </div>
    </main>
  );
}
