import React from 'react';

export class Help extends React.Component {
    render() {
        return (
            <article className='help menu'>
                <section>
                    <section>
                        <p className='title'>Something doesn't work</p>
                        <p>Too bad.</p>
                    </section>
                    <section>
                        <p className='title'>How do I import my card into the game?</p>
                        <p>This requires the mod <a href="https://inscryption.thunderstore.io/package/MADH95Mods/JSONCardLoader/">JSONLoader</a> for Inscryption.</p>
                        {/* <p>For help with installing the mod and importing the card, see this <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">video</a>.</p> */}
                    </section>
                    <section>
                        <p className='title'>How do I save images?</p>
                        <p>On a computer, right-click the image, then select "Save".</p>
                        <p>On mobile, long-press the image, then save the image.</p>
                    </section>
                </section>
                <section>
                    <section>
                        <p className='title'>Can I print the cards?</p>
                        <p>You are allowed to download and print the cards yourself.</p>
                        <p>Beware that some print companies will <strong>not</strong> print cards with Inscryption art, due to copyright infringement.</p>
                        <p>For easier assembly of cards, ensure the <i>Border</i> option is set at the bottom of the generators, which adds a large border around the cards.</p>
                    </section>
                </section>
            </article>
        )
    }
}
