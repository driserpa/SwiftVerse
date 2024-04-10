import './Banner.modules.css'
import circuloColorido from '/midn.jpg'
import minhaFoto from '/ts.jpg'

function Banner() {
    return (
        <>
            <div className='banner'>
                <div className='apresentacao'>
                    <h1 className='titulo'>SwiftVerse!</h1>

                    <p className='paragrafo'>
                        Bem-vindas ao mundo encantador da Taylor Swift! Sou SwiftVerse, seu guia neste passeio através do universo desta talentosa artista. Prepare-se para explorar o espaço pessoal de Taylor Swift, onde melodias envolventes e letras emotivas se encontram.
                    </p>
                </div>

                <div className='imagens'>
                    <img 
                        className='circuloColorido'
                        src={circuloColorido}
                        aria-hidden={true}
                    />

                    <img
                        className='minhaFoto'
                        src={minhaFoto}
                        alt='Foto da Cantora, Taylor Swift'
                    />
                </div>
            </div>
        </>
    )
}

export default Banner
