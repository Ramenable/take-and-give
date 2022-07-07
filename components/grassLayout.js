import Link from 'next/link'
import styles from './grass.module.css'
import {useEffect} from "react";

export default function GrassLayout({ children }) {
    useEffect(() => {
        let canvas = document.getElementById('grass'),
            ctx = canvas.getContext('2d'),
            stack = [],
            w = window.innerWidth,
            h = window.innerHeight;
            let drawer = function(){
            ctx.fillStyle="#222E50";
            ctx.fillRect(0,0.5*h,w,0.8 * h);
            stack.forEach(function(el){
                el();
            })
            requestAnimationFrame(drawer);
            }
            let anim = function(){
            let x = 0, y = 0;
            let maxTall = Math.random()*200+200;
            let maxSize = Math.random()*10+5;
            let speed = Math.random()*2;  
            let position = Math.random()*w-w/2;
            let c = function(l,u){return Math.round(Math.random()*(u||255)+l||0);}
            let color = 'rgb('+c(60,10)+','+c(201,50)+','+c(120,50)+')';
            return function(){
                let deviation=Math.cos(x/30)*Math.min(x/40,50),
                    tall = Math.min(x/2,maxTall),
                    size = Math.min(x/50,maxSize);
                x+=speed;
                ctx.save();
                ctx.strokeWidth=10;
                ctx.translate(w/2+position,h)
                ctx.fillStyle=color;
                ctx.beginPath();
                ctx.lineTo(-size,0);
                ctx.quadraticCurveTo(-size,-tall/2,deviation,-tall);
                ctx.quadraticCurveTo(size,-tall/2,size,0);
                ctx.fill();
                ctx.restore()
            }    
            };
            for(let x = 0; x<400;x++){stack.push(anim());}
            canvas.width = w;
            canvas.height = h;
            drawer();
      }, []);

    return (
        // Grass in night sky animation
        <div id={styles['bg']}>
            <Link href='/interests/seasons'>
                <a class='home'>Go Back Home</a>
            </Link>
            <canvas id='grass'></canvas>
            <div id={styles['stars']} class={styles['star-a']} ></div>
            <div id={styles['stars']} class={styles['star-b']} ></div>
            <div id={styles['stars']} class={styles['star-c']} ></div>
            <div id={styles['stars']} class={styles['star-d']} ></div>
	        <div id={styles['stars']} class={styles['star-e']} ></div>
            <div id={styles['stars']} class={styles['star-f']} ></div>
            <div id={styles['stars']} class={styles['star-g']} ></div>
            <div id={styles['stars']} class={styles['star-h']} ></div>
            <div id={styles['stars']} class={styles['star-i']} ></div>
	        <div id={styles['stars']} class={styles['star-j']} ></div>
        </div>
    )
  }