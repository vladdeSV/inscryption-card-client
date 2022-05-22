import React from 'react';

export default class Credits extends React.Component {
    render() {
        return (
            <article className='credits'>
                <section id='credits' className='menu'>
                    <div>
                        <p className='title'>Credits</p>
                        <p>Original art from <a href="https://www.inscryption.com/"><i>Inscryption</i></a> by Daniel Mullins, redistrubuted with permission</p>
                        <p>Additional art courtesy of <a href="https://twitter.com/PixelProfligate">Pixel Profilgate</a></p>
                        <p>Generator made by Vladimirs Nordholm</p>
                    </div>
                </section>
                <section id='supporters' className='menu'>
                    <div>
                        <p className='title'>Supporters</p>
                        <p>Special thanks to the following amazing people for supporting my work on Patreon 🎉 (updated semi-regurarily)</p>
                        <ul>
                            {['Maj', 'Citywatchers', 'Scott St. Onge'].map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                            <li><a href="https://www.patreon.com/vladde">You…?</a></li>
                        </ul>
                    </div>
                </section>
            </article>
        )
    }
}
