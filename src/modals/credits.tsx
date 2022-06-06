import React from 'react';

export default class Credits extends React.Component {
    render() {

        const socialMedia: [string, string, JSX.Element][] = [
            ['twitter', 'https://twitter.com/vladdeSV', <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>],
            ['patreon', 'https://www.patreon.com/vladde', <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Patreon</title><path d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z" /></svg>],
            ['youtube', 'https://www.youtube.com/c/vladde', <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>],
        ]

        return (
            <article className='credits'>
                <section id='credits' className='menu'>
                    <div>
                        <p className='title'>Credits</p>
                        <p>Original art from <a href="https://www.inscryption.com/"><i>Inscryption</i></a> by Daniel Mullins, redistrubuted with permission</p>
                        <p>Additional art courtesy of <a href="https://twitter.com/PixelProfligate">Pixel Profilgate</a></p>
                        <p><a href="https://inscryption.thunderstore.io/package/MADH95Mods/JSONCardLoader/">JSONLoader</a>, used for importing games into game, maintained by MADH95</p>
                    </div>
                    <div>
                        <p>Generator made by Vladimirs Nordholm</p>
                        <p className='socials'>
                            {socialMedia.map(e => <a key={e[0]} href={e[1]}>{e[2]}</a>)}
                        </p>
                    </div>
                </section>
                <section id='supporters' className='menu'>
                    <div>
                        <p className='title'>Supporters</p>
                        <p>Special thanks to the following amazing people for supporting my work on Patreon 🎉 (updated semi-regurarily)</p>
                        <ul>
                            {['Maj', 'Citywatchers', 'Scott St. Onge'].map((name, index) => (
                                <li key={name}>{name}</li>
                            ))}
                            <li><a href="https://www.patreon.com/vladde">You…?</a></li>
                        </ul>
                    </div>
                </section>
            </article>
        )
    }
}
