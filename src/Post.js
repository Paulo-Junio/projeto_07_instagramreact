const conteudo =[
    {
        usuario:"assets/img/meowed.svg",
        nome:"meowed",
        post:"assets/img/gato-telefone.svg",
        seguidorImagem:"assets/img/respondeai.svg",
        seguidorDestaque:"respondeai",
        curtidas:"101.523"
    },
    {
        usuario:"assets/img/barked.svg" ,
        nome:"barked",
        post:"assets/img/dog.svg",
        seguidorImagem:"assets/img/adorable_animals.svg",
        seguidorDestaque:"adorable_animals",
        curtidas:"99.159"
    }
]

const renderizarPosts = conteudo.map(post => <Posts usuario={post.usuario} nome={post.nome} postImagem={post.post} seguidorImagem ={post.seguidorImagem} seguidorDestaque={post.seguidorDestaque} curtidas={post.curtidas}/>)

function Icones(props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    );
}

function Posts(props){
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.usuario} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <Icones name="ellipsis-horizontal" />
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postImagem} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                    <Icones name="heart-outline" />
                    <Icones name="chatbubble-outline" />
                    <Icones name="paper-plane-outline" />
                    </div>
                    <div>
                    <Icones name="bookmark-outline" />
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.seguidorImagem} />
                    <div class="texto">
                    Curtido por <strong>{props.seguidorDestaque}</strong> e <strong>outras {props.curtidas}pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Post(){
    return (
        <div class="posts">
            {renderizarPosts}
        </div>

    );
}