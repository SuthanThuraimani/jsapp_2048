import React from 'react';
import './Board.css'

export default function Board(props) { 
    var color_map = new Map([[2, '#C0C0C0'], [4, '#C48189'], [8, '#808000'], [16, '#00FFFF'], [32, '#4863A0'], [64, '#57E964'], [128, '#F433FF'],[256, '#FFFB33'],[512, '#FC33FF'],[1024, '#1F2FDA']]);
   
    return (        
        <div className="container">
            <div className="inner">
                {
                    props.matrix.map((val, index) =>
                        (<div key={index} className="item">
                            <h2 style={{ color: color_map.get(val)}}>{(val === 0)? '':val}</h2></div>))
                }
            </div>
        </div>);
}

