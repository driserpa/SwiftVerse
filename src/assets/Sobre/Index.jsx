import styles from './Sobre.module.css'
import PostModelo from "../PostModelo/Index"
import fotoCapa from '/midnight.jpg'
import fotoSobre from '/tay.jpg'

function Sobre() {
    return (
        <>
            <PostModelo
                fotoCapa={fotoCapa}
                titulo="Sobre mim"
            >
                <h3 className={styles.subtitulo}>
                    Quem é Taylor Swift?
                </h3>

                <img src={fotoSobre}
                    alt="Foto Taylor Swift"
                    className={styles.fotoSobreMim}
                />
                <p className={styles.paragrafo}>
                    Taylor Swift é uma das cantoras e compositoras mais proeminentes da música pop contemporânea. Nascida em 13 de dezembro de 1989, em Reading, Pensilvânia, nos Estados Unidos, ela começou a se destacar na indústria musical desde muito jovem. Taylor se mudou para Nashville, Tennessee, aos 14 anos, com o sonho de seguir uma carreira na música country.
                </p>
                <p className={styles.paragrafo}>
                    Seu álbum de estreia, "Taylor Swift", lançado em 2006, trouxe sucessos como "Tim McGraw" e "Teardrops on My Guitar", estabelecendo-a como uma jovem artista talentosa no cenário country. Seu segundo álbum, "Fearless", lançado em 2008, ampliou ainda mais seu sucesso, ganhando quatro prêmios Grammy, incluindo Álbum do Ano, tornando-a a artista mais jovem a receber esse prêmio na época.
                </p>
                <p className={styles.paragrafo}>
                    Desde então, Taylor Swift lançou uma série de álbuns de sucesso, cada um marcando uma evolução em sua sonoridade e estilo. Ela incorporou elementos de pop em seu terceiro álbum, "Speak Now" (2010), e continuou essa transição para o pop em álbuns subsequentes, como "Red" (2012), "1989" (2014) e "Reputation" (2017). Em "Lover" (2019) e "Folklore" (2020), Swift explorou uma abordagem mais introspectiva e experimental em sua música.
                </p>
                <p className={styles.paragrafo}>
                    Além de seu sucesso na indústria musical, Taylor Swift é conhecida por sua habilidade distintiva de contar histórias em suas letras, muitas vezes baseadas em suas próprias experiências pessoais. Suas canções abordam temas como amor, relacionamentos, empoderamento feminino e crescimento pessoal, conectando-se profundamente com seus fãs ao redor do mundo.
                </p>
                <p className={styles.paragrafo}>
                    Fora da música, Swift é uma figura influente na cultura popular, usando sua plataforma para defender causas como direitos LGBTQ+, igualdade de gênero e justiça social. Ela também é uma empresária bem-sucedida, tendo lançado sua própria linha de produtos e colaborado com marcas de renome.
                </p>
                <p className={styles.paragrafo}>
                    Ao longo de sua carreira, Taylor Swift recebeu inúmeros prêmios e honrarias, incluindo Grammys, American Music Awards, MTV Video Music Awards e o prestigiado prêmio de Ícone Global no Brit Awards. Sua capacidade de se reinventar musicalmente, combinada com seu talento inegável e dedicação à autenticidade, solidificaram sua posição como uma das artistas mais influentes e respeitadas da indústria da música
                </p>
            </PostModelo>
        </>
    )
}

export default Sobre