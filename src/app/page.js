'use client';
import Paragraph from '@/components/Paragraph';
import Word from '@/components/Word';
import Character from '@/components/Character';

const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

export default function Home() {

  const words = paragraph.split(" ")
  return (
    <main>
        <div style={{height: "100vh"}}></div>
        <Paragraph paragraph={paragraph}/>
        <div style={{height: "100vh"}}></div>
        <Word paragraph={paragraph}/>
        <div style={{height: "100vh"}}></div>
        <Character paragraph={paragraph} />
        <div style={{height: "100vh"}}></div>
    </main>
  )
}