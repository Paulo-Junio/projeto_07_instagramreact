function FundoMobile (props){
    return (
        <ion-icon name={props.name}></ion-icon>
    );
}


export default function Fundo(){
    return (
        <div class="fundo-mobile">
            <FundoMobile name="home" />
            <FundoMobile name="search-outline" />
            <FundoMobile name="add-circle-outline"/>
            <FundoMobile name="heart-outline"/>
            <FundoMobile name="person-outline" />
        </div>
    )
}