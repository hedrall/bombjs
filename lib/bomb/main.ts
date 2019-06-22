import '../../scss/main.scss';

declare const document: Document;

window.addEventListener( 'load', () => {
  document.querySelectorAll<HTMLElement>( 'button.bomb').forEach( _ => {
    console.log( 'bomb detected' );


    if ( 'bombCount' in _.dataset ) {
      _.innerText = _.dataset['bombCount'];
      _.style.color = '#f1b933';
      _.style.fontSize = '2em';
      _.style.paddingTop = '1em';
    }

    _.addEventListener( 'click', e => {
      let counter = 1;

      const target = e.target as HTMLElement;
      if ( 'bombCount' in target.dataset ) {
        counter = parseInt( target.dataset['bombCount'] );
      }

      [...Array( counter ).keys()].map( index => {
        console.log( index );
        setTimeout( () => {
          console.warn( 'expansion' );
          expansion();
        }, ( index ) * 100);
      });
    })
  });

  const expansion = () => {
    const bomb = document.createElement( 'div' );
    bomb.innerText = 'BOMB !!!';
    bomb.className = 'bomb-message';
    document.body.appendChild( bomb );
    setTimeout( () => {
      document.body.removeChild( bomb );
    }, 2000);
  };
});

