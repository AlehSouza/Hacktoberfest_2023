import Head from 'next/head'
import './styles.css'

const players = [
    // Contribuidores do hacktoberfest 2023
    // Preencha com seu nome, escolha de carreira, linguagens e stacks que você conhece e não esqueça de colocar o seu linkedIn
    // Sinta-se a vontade para colocar sua foto ou não =)
    {
        // Example
        image: 'https://media.licdn.com/dms/image/D4D03AQHhmcQ0HfUPVQ/profile-displayphoto-shrink_800_800/0/1680396598292?e=1703116800&v=beta&t=ZRv3KiyoKKc2d6tlA61eOtyAzkdyZnp6nR5eXAs1Q14',
        name: 'Alexandre Souza',
        role: 'FrontEnd Developer',
        stacks: ['JavaScript', 'TypeScript', 'React.js'],
        linkedin: 'https://www.linkedin.com/in/alehsouza/',
    }
]

export default function Home() {
    return (
        <div className={'main'} >
            <Head>
                <title>Hacktoberfest 2023</title>
                <link rel="icon" href="https://hacktoberfest.com/_next/static/media/logo-hacktoberfest--logomark.b91c17d2.svg" type="image/x-icon" />
            </Head>
            <div className={'container'}>
                <div className={'header'}>
                    <img src='https://hacktoberfest.com/_next/static/media/logo-hacktoberfest--logomark.b91c17d2.svg' />
                    <span>
                        Contribuidores do <br />
                        Hacktoberfest 2023
                    </span>
                </div>
                <div className={'list'}>
                    {
                        players.map((player, key) => {
                            return (
                                <a
                                    key={key}
                                    target='_blank'
                                    href={player.linkedin}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'unset'
                                    }}>
                                    <div className={'player'}>
                                        <div className={'player_left'}>
                                            <div
                                                className={'icon'}
                                                style={{
                                                    backgroundImage: `url(${player.image ? player.image : 'https://i.pinimg.com/564x/64/88/0b/64880b9b0fe5b53bbe3f7280d262b33f.jpg'})`
                                                }}
                                            />
                                        </div>
                                        <div className={'player_rigth'}>
                                            <span className={'player_name'}>
                                                {player.name} -
                                                <span className={'player_role'}>
                                                    {player.role}
                                                </span>
                                            </span>
                                            <div className={'container_stack'}>
                                                {
                                                    player.stacks.length > 0 &&
                                                    player.stacks.map((stack, index) => {
                                                        return (
                                                            <span className={'player_stack'} key={index}>
                                                                {stack}
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
                <a href="https://github.com/AlehSouza/Hacktoberfest_2023" target="_blank" className='btn_primary'>
                    Contribuir!
                </a>
            </div>
        </div>
    )
}
