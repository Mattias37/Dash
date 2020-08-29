import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function About() {
  return (
    <>
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    
        <div>


            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
                            <h3>Impulsa tu Marca</h3>
                            <p>Estrategias Personalizadas</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>Conviértete en Micro Influenciador</h3>
                            <p>Alcanza tus objetivos</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Quienes somos...</h3>
                            <p>Marca (dash) influence</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>Nuestros logros</h3>
                            <p>Dejanos sorpenderte...</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>¿Como funciona?</h2>
                        </header>
                        <p>Sea que que sea lo que estes necesitando sabemos que puedes generar grandes logros ya sea convirtiendote un verdadero influencer del siglo 21 o mejorar la influencia de tu marca... Son dos metas que envuelven a muchos de nosotros. Y Dash esta aqui para ayudarte a conseguirlos!</p>
                        <ul className="actions">
                            <li><Link href="/landing"><a className="button next">Toma tus primeros pasos...</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>

    </>
  );
}
