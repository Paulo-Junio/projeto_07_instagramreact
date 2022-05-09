const seguidoresSugeridos =[
    {
        imagem:"assets/img/bad.vibes.memes.svg",
        nome:"bad.vibes.memes",
        razao:"Segue você"
    },
    {
        imagem:"assets/img/chibirdart.svg",
        nome:"chibirdart",
        razao:"Segue você"
    },
    {
        imagem:"assets/img/razoesparaacreditar.svg",
        nome:"razoesparaacreditar",
        razao:"Novo no Instagram"
    },
    {
        imagem:"assets/img/adorable_animals.svg",
        nome:"adorable_animals",
        razao:"Segue você"
    },
    {
        imagem:"assets/img/smallcutecats.svg" ,
        nome:"smallcutecats",
        razao:"Segue você"
    },
]

function Usuario(props){
    return (
        <div class="usuario">
            <img src={props.src} />
            <div class="texto">
                <strong>{props.nickname}</strong>
                {props.nome}
            </div>
        </div>
    );
}

const renderizarSugestoes = seguidoresSugeridos.map(sugerir => <Sugestoes src={sugerir.imagem} nickname={sugerir.name} razao={sugerir.razao}/>)

function Sugestoes (props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.src}/>
                <div class="texto">
                    <div class="nome">{props.nickname}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div class="sidebar">

            <Usuario src="assets/img/catanacomics.svg" nickname="catanacomics" nome="Catana" />
            
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver Tudo</div>
                </div>

                {renderizarSugestoes}

            </div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}