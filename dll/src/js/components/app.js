import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

import '../../sass/sass.scss';
import '../../less/less.less';
import '../../stylus/stylus.styl';

console.log(data);
function App(){
    const [loaderList, setLoaderList] = useState([])
    function handleClick(){
        setLoaderList(data.loaders)
    }
    return (
        <div>
            <p class="post-css">Esto es postcss</p>
            <p class="sass">Esto es sass</p>
            <p class="less">Esto es less</p>
            <p class="stylus">Esto es stylus</p>
            Que linda aplicacion hecha en React.js
            <video src={video} width={360} controls poster={logo}></video>
            <p>
                <img src={logo} alt="" width={40}/>
            </p>
            <ul>
                {
                    loaderList.map(item => <Loader {...item} key={item.id}/>)
                }
            </ul>

            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
            
        </div>
    )
}

export default App