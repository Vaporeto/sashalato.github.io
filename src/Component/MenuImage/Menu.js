import React,{ useState, useEffect } from 'react';

function Menu(props){
    const [isOpen] = useState(props.isOpen);
    
    
    return(
        <>
        <Cursor></Cursor>
         {/* <!-- Menu Images --> */}
        {/* <!-- Image 1 --> */}
        <div id="m-img-1" className="menu-image-wrapper" style={{ display: isOpen ? 'inline-block' : 'none' }}>
            <img className="menu-image" src="https://i.blogs.es/8c50c2/rick-morty/840_560.jpeg" alt="" />
            <img className="menu-image-back" src="https://i.blogs.es/8c50c2/rick-morty/840_560.jpeg" alt="" />
        </div>
        {/* <!-- Image 2 --> */}
        <div id="m-img-2" className="menu-image-wrapper" style={{ display: isOpen ? 'inline-block' : 'none'}}>
            <img className="menu-image" src="https://www.saladepeligro.com/wp-content/uploads/2020/04/cuarta_temporada_rick_morty-1000x489-1.jpg" alt="" />
            <img className="menu-image-back" src="https://www.saladepeligro.com/wp-content/uploads/2020/04/cuarta_temporada_rick_morty-1000x489-1.jpg" alt="" />
        </div>
        {/* <!-- Image 3 --> */}
        <div id="m-img-3" className="menu-image-wrapper" style={{ display: isOpen ? 'inline-block' : 'none'}}>
            <img className="menu-image" src="https://es.rollingstone.com/wp-content/uploads/2022/09/La-serie-Rick-y-Morty-podria-ser-eterna.jpg" alt="" />
            <img className="menu-image-back" src="https://es.rollingstone.com/wp-content/uploads/2022/09/La-serie-Rick-y-Morty-podria-ser-eterna.jpg" alt="" />
        </div>
        {/* <!-- Image 4 --> */}
        <div id="m-img-4" className="menu-image-wrapper" style={{ display: isOpen ? 'inline-block' : 'none'}}>
            <img className="menu-image" src="https://media.revistagq.com/photos/6266a08026711052931a9e24/1:1/w_1080,h_1080,c_limit/193-1939340_rick-and-morty-stills.png" alt="" />
            <img className="menu-image-back" src="https://media.revistagq.com/photos/6266a08026711052931a9e24/1:1/w_1080,h_1080,c_limit/193-1939340_rick-and-morty-stills.png" alt="" />
        </div>
        </>
    );
}

export default Menu;


function Cursor() {
  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [menuImage, setMenuImage] = useState({});
  const speed = 0.1; // between 0 and 1

  useEffect(() => {
    const updateCoordinates = e => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCoordinates);
    return () => {
      window.removeEventListener('mousemove', updateCoordinates);
    };
  }, []);

  useEffect(() => {
    setMenuImage({
      1: document.querySelector('#m-img-1'),
      2: document.querySelector('#m-img-2'),
      3: document.querySelector('#m-img-3'),
      4: document.querySelector('#m-img-4')
    });
  }, []);

  const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    setPos({ x: pos.x + diffX * speed, y: pos.y + diffY * speed });

    const translate = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

    Object.values(menuImage).forEach(item => {
      item.style.transform = translate;
    });
  };

  useEffect(() => {
    const loop = () => {
      updateCursor();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(loop);
    };
  }, [pos, mouse, menuImage]);

  return (
    <>
    {/* <!-- #Cursor --> */}
    <div className="cursor"></div>
    <div id="cursor">
        <div className="cursor-circle"></div>
    </div>
   </>
  );
}
