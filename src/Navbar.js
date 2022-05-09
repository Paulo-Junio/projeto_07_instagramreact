const iconNames =["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

function Logos (props) {
  return (
        <div class="logo">
          <ion-icon name={props.name}></ion-icon>
          <div class="separador"></div>
          <img src={props.src}/>
        </div>
  );
}

function Icones() {
  return (
    <div>
      <div class="icones">
        {iconNames.map(names => <ion-icon name= {names}> </ion-icon>)}
      </div>
      <div class="icones-mobile">
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
    </div>
  );
}
function LogoMobile (props){
  return (
      <div class="logo-mobile">
        <ion-icon name={props.name}></ion-icon>
      </div>
  );
};

function InstagramMobile(props){
  return (
    <div class="instagram-mobile">
        <img src={props.src} />
    </div>
  );
};

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
            <Logos name="logo-instagram" src="assets/img/logo.png"/>
            <LogoMobile name="logo-instagram"/>
            <InstagramMobile src="assets/img/logo.png"/>
            <div class="pesquisa">
              <input type="text" placeholder="Pesquisar" />
            </div>
            <Icones />
      </div>
    </div>
  )
}