import React, { Component } from 'react'
import Button from '../ui/button/Button';
import NewInput from '../ui/input/NewInput';
import { getLocalStorage, setLocalStorage } from '../../utils/getLocalStorage';
import "./entry.css"
import { TfiCup } from "react-icons/tfi"
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors, FaRegSadCry } from "react-icons/fa"
import { BiCool } from "react-icons/bi"
import { motion } from "framer-motion"
import DisplayScores from '../functionComponents/DisplayScores';
import ContainerButtons from '../functionComponents/ContainerButtons';
import Classifica from '../functionComponents/Classifica';
import WelcomeTitle from '../functionComponents/WelcomeTitle';

import withNavigation from "../../utils/withNavigation"


// PUNTI PROGETTO

// 1. Classifica display con nomi e se uguali li sovrascrive 
// 2. LocalStorage (nome utente, punteggio finale partita)
// 3. Input utente
// 4. Animazioni
// 5. Opzionale barra di ricerca 
// 6. schermata di ingresso (da pensare)

// STATI: scelta cpu, scelta utente, risultato partita, risultato round, classifica display, toggle button

// Componenti
// 1. EntryApp --> Classe 
// 2. Bottoni, input,

// versione prova stato 

// useState({
//     utenti: [
//         {
//             nome: "",
//             punteggioFinale: 0
//         },
//     ],
//     choiceCpu: "",
//     sceltaUtente: "",
//     risultatoRound: [0, 0]
// })


class Entry extends Component {
    constructor(props) {
        super(props);

        this.userName = null;

        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify([
                {
                    name: 'player1',
                    result: 3,
                    id: Math.floor(Math.random() * 10000)
                },
                {
                    name: 'player2',
                    result: 2,
                    id: Math.floor(Math.random() * 10000)
                },
                {
                    name: 'player3',
                    result: 1,
                    id: Math.floor(Math.random() * 10000)
                },
                {
                    name: 'player4',
                    result: 5,
                    id: Math.floor(Math.random() * 10000)
                },

            ]))
        }

        /* local storage of adds */
        if (!localStorage.getItem("adds")) {
            localStorage.setItem("adds", JSON.stringify([
                {
                    name: 'add1',
                    seconds: 5,
                    images: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                },
                {
                    name: 'add2',
                    seconds: 4,
                    images: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                },
                {
                    name: 'add3',
                    seconds: 5,
                    images: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                },
                {
                    name: 'add4',
                    seconds: 5,
                    images: "https://images.unsplash.com/photo-1544804066-ff04a3f1ab8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
                },

            ]))
        }

        this.matrix = [
            [0, -1, 1],
            [1, 0, -1],
            [-1, 1, 0]
        ];

        // this.choices = ['rock', 'paper', 'scissors'];
        this.choices = [
            <FaRegHandRock />,
            <FaRegHandPaper />,
            <FaRegHandScissors />
        ];


        this.choiceCpu = null;
        this.choiceUser = null;


        this.state = {
            winsCpu: 0, // round
            winsUser: 0, //round
            even: 0,
            typeInput: false,
            isNotValid: false,
            isWelcome: false,
            noThanks: false,
            displayButton: false,
            alreadyRegistered: false,
            isRestarted: false,
            isWinner: "",
            isScoresVisible: false,
            isAddTimerOver: 0
        }

        console.log(this.props);


    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        // let getUser = getLocalStorage("users");
        if (this.state.isWinner !== "") {
            this.uploadResult(this.state.isWinner);
        }
    }


    // funzione pr determinare chi ha vinto
    winnerRound = (sceltaUtente, choiceCpu) => {

        let check = this.matrix[sceltaUtente][choiceCpu]

        let winnerRound = Object.assign({}, this.state)

        switch (check) {
            case 1:
                winnerRound.winsUser++;
                break;
            case -1:
                winnerRound.winsCpu++
                break;
            default:
                winnerRound.even++
        }

        this.winnerMatch2(winnerRound);

        this.setState({
            winsUser: winnerRound.winsUser,
            winsCpu: winnerRound.winsCpu,
            isWinner: winnerRound.isWinner,
            isRestarted: winnerRound.isRestarted,
            even: winnerRound.even,
        })
    }


    showMoves = () => {
        if (this.state.winsCpu !== 0 || this.state.winsUser !== 0 || this.state.even !== 0) {

            {
                return (
                    <div className='move'>
                        <h4
                        >
                            CPU:
                        </h4>
                        <motion.span
                            animate={ {
                                scale: [1, 2, 2, 1, 1],
                                opacity: 1,
                                x: [0, 10, 0],
                                rotate: 360
                            } }
                            transition={ {
                                type: "spring",
                                repeat: 3,
                                duration: 1.08
                            } }
                        >
                            { this.choices[this.choiceCpu] }
                        </motion.span>
                        <h4>
                            USER
                        </h4>
                        <motion.span
                            animate={ {
                                scale: [1, 2, 2, 1, 1],
                                opacity: 1,
                                x: [0, -30, 0],
                                rotate: 360
                            } }
                            transition={ {
                                type: "spring",
                                repeat: 3,
                                duration: 1
                            } }
                        >
                            { this.choices[this.choiceUser] }
                        </motion.span>
                    </div>
                )
            }
        }
    }


    winnerMatch2(copyState) {
        //let copyState = Object.assign({}, this.state)

        let enemyName = this.randomCpuPlayer();
        if (copyState.winsUser - copyState.winsCpu >= 2) {
            /* vince user. */
            copyState.isWinner = this.userName;
            copyState.isRestarted = true
        }
        if (copyState.winsUser - copyState.winsCpu <= -2) {
            /* vince cpu.*/
            copyState.isWinner = enemyName;
            copyState.isRestarted = true
        }
        // caso in cui siamo, per esempio, a punteggio 2-2
        if (copyState.winsUser + copyState.winsCpu >= 4) {
            if (copyState.winsUser > copyState.winsCpu) {
                /* vince user. */
                copyState.isWinner = this.userName;
                copyState.isRestarted = true
            }
            if (copyState.winsCpu > copyState.winsUser) {
                /* vince cpu. */
                copyState.isWinner = enemyName;
                copyState.isRestarted = true
            }
        }
    }

    randomCpuPlayer() {
        const cpuPlayers = ["player1", "player2", "player3", "player4"];
        return cpuPlayers[Math.floor(Math.random() * cpuPlayers.length)];
    }

    uploadResult(winner) {
        let getUsers = getLocalStorage("users");
        // console.log("winner", winner);

        getUsers.find((el) => {
            if (el.name === winner) {
                el.result++;
            }
        })
        setLocalStorage("users", getUsers);
    }

    // scelta cpu
    cpuChoice() {
        let cpu = Math.floor((Math.random() * 3));
        return cpu;
    }

    inputName = (e) => {
        this.userName = e.target.value.toLowerCase();
    }

    addNewUser = () => {
        //metto isInvalid su false così toglie l'avviso di mettere il nome
        let isNotValid = false;
        let alreadyRegistered = false;
        let displayButton = false;

        // this.setState({
        //     isNotValid: false // SISTEMARE
        // })

        let newUser = {
            name: this.userName,
            result: 0,
            id: Math.floor(Math.random() * 10000)
        }
        //controllo che il campo non sia vuoto
        if (newUser.name.trim().length === 0) {
            isNotValid = true
            // console.log("input non valido");
        }
        if (this.checkDuplicateName()) {
            alreadyRegistered = true
            displayButton = true
            // console.log("input non valido");
        }
        if (isNotValid === false && alreadyRegistered === false) {
            let getUsers = getLocalStorage("users")
            getUsers.push(newUser)
            setLocalStorage("users", getUsers)
            displayButton = true
        }
        this.setState({
            isNotValid: isNotValid,
            alreadyRegistered: alreadyRegistered,
            displayButton: displayButton,
            typeInput: true // dopo aver messo il nome diventa true e l'input e il button scompaiono
        })

    }

    checkDuplicateName = () => {
        let getUser = getLocalStorage("users")
        return getUser.find((el) => el.name === this.userName)
    }

    // scissor = () => {
    //     this.choiceUser = 2;
    //     this.choiceCpu = this.cpuChoice()
    //     this.winnerRound(this.choiceUser, this.choiceCpu)
    // }

    // rock = () => {
    //     this.choiceUser = 0;
    //     this.choiceCpu = this.cpuChoice()
    //     this.winnerRound(this.choiceUser, this.choiceCpu)
    // }

    paper = (value) => (e) => {
        // console.log(e.target.value);
        console.log(value);
        // this.choiceUser = e.target.value;
        this.choiceUser = parseInt(value);
        this.choiceCpu = this.cpuChoice()
        this.winnerRound(this.choiceUser, this.choiceCpu)
    }

    showButtonResetMatch() {
        if (this.state.isWinner !== "") {
            return (
                <>
                    <Button
                        callBackButton={ this.resetMatch }
                        label={ "Restart" }
                        styleCss={ "btn action" }
                    />
                </>
            );
        }
    }

    showScoreList = () => {
        this.setState({
            isScoresVisible: !this.state.isScoresVisible
        })
    }


    mapScoreList() {
        let getUser = getLocalStorage("users")
        getUser.sort((function (a, b) { return b.result - a.result }))

        return getUser.map(function (item, i) {
            return (
                <div key={ item.id } >
                    <Classifica
                        whileHover={ { scale: 1.1 } }
                        initial={ { opacity: 0, scale: 0.5 } }
                        animate={ { opacity: 1, scale: 1 } }
                        transition={ {
                            duration: 2,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        } }
                        styleClassifica={ "classifica" }
                        name={ item.name }
                        result={ item.result }
                        index={ i + 1 }
                    />
                </div>
            );
        });
    }

    resetMatch = () => {
        this.setState({
            winsUser: 0,
            winsCpu: 0,
            even: 0,
            isWinner: "",
            isRestarted: false,
            isAddTimerOver: 0,
        });
    };

    // non gioca più
    noReplay = () => {
        this.setState({
            isRestarted: false,
            displayButton: false,
            typeInput: false
        })
        this.resetMatch()
    }

    /*************** TEST FUNZIONI ADD **************** */

    randomAdd(adds) {
        return adds[Math.floor(Math.random() * adds.length)];
    }

    showAdd = () => {
        let addsList = getLocalStorage("adds");
        let add = this.randomAdd(addsList);
        // console.log("L'add scelta è", add);

        return (
            <div className='container__images'>
                <img src={ add.images } />
                { this.setTimer(add, this.setAddState) }
            </div>
        );
    };

    setAddState = () => {
        // console.log("scattato lo stato dell'add");
        this.setState({
            isAddTimerOver: 1,
        });
    };

    setTimer(add, setAddState) {
        setTimeout(
            function () {
                setAddState(add);
            }.bind(this),
            add.seconds * 1000
        );
        return;
    }


    /**************************************************** */

    wannaTry = () => {
        this.setState({
            isWelcome: !this.state.isWelcome,
            isAddTimerOver: 0,
        })
    }
    anotherTime = () => {
        this.setState({
            noThanks: !this.state.noThanks,
            isWelcome: false,
            isAddTimerOver: 0,
        })
    }

    // per ritornare alla home
    returnHome = () => {
        this.setState({
            isWelcome: true
        })
    }

    componentWillUnmount() { }

    render() {
        return (
            <div className='container'>
                {
                    !this.state.isWelcome && !this.state.noThanks &&

                    <div className='welcome'>
                        <WelcomeTitle
                            title={ "Welcome! This is your lucky day!" }
                            subTitle={ "Do you wanna try to win??" }
                            classTitle={ "welcome__title" }
                        />
                        <ContainerButtons>
                            <div className='welcome__button'>
                                <Button
                                    callBackButton={ this.wannaTry }
                                    label={ "I'm the best!" }
                                    styleCss={ "btn add-user" }
                                />
                                <Button
                                    callBackButton={ this.anotherTime }
                                    label={ "Another day" }
                                    styleCss={ "btn add-user" }
                                />
                            </div>
                        </ContainerButtons>
                    </div>
                }

                {
                    !this.state.isWelcome && this.state.noThanks &&
                    <div className='presentation'>
                        <h2>This is a app realized by....</h2>
                        <Button
                            callBackButton={ this.returnHome }
                            label={ "I wanna try!" }
                            styleCss={ "btn add-user" }
                        />
                    </div>
                }

                {/* Inizio gioco */ }

                {
                    this.state.isWelcome &&
                    <div className='startgame__title'>
                        <WelcomeTitle
                            initial={ { opacity: 0, scale: 0.5 } }
                            animate={ { opacity: 1, scale: 1 } }
                            transition={ {
                                duration: 2,
                                delay: 0.8,
                                ease: [0, 0.71, 0.2, 1.01]
                            } }
                            classTitle={ "container__title" }
                            title={ "Start Game" }
                        />

                        { this.state.displayButton && !this.state.isRestarted &&
                            this.showMoves() }

                        <div>
                            {
                                <DisplayScores
                                    winsCpu={ this.state.winsCpu }
                                    winsUser={ this.state.winsUser }
                                    classNameDisplay={ "container__scores" }
                                    classNameDisplyItem={ "container__items" }
                                />
                            }

                            <div className='container__input'>
                                {
                                    this.state.isNotValid &&
                                    <h3>Insert your name</h3>
                                }
                                {
                                    this.state.alreadyRegistered &&
                                    <h3>Ciao { this.userName }, gioca di nuovo!</h3>
                                }

                                { !this.state.typeInput &&
                                    <>
                                        <NewInput
                                            typeInput={ "text" }
                                            callbackInput={ this.inputName }
                                            styleNewInput={ "newinput" }
                                            styleLabel={ "label" }
                                            placeholderInput={ "Write your name" }
                                        />
                                        <Button
                                            callBackButton={ this.addNewUser }
                                            label={ "Add User" }
                                            styleCss={ "btn add-user" }
                                        />
                                    </>
                                }
                            </div>


                            {
                                this.state.isWinner === this.userName &&
                                <motion.div
                                    animate={ { rotate: 360, opacity: 1 } }
                                    transition={ { duration: 1 } }
                                    className='win'>
                                    <h2>You WIN!!!</h2>
                                    <span>
                                        <BiCool />
                                    </span>
                                    {/*
                                    Hai diritto al { getLocalStorage("users").find(function (el) {
                                        if (el.name === this.userName) {
                                            el.result++;
                                        }
                                    }).result * 0.1 }% di sconto sul prossimo vino
                                */}
                                </motion.div>
                            }
                            {
                                this.state.isWinner !== this.userName &&
                                this.state.isWinner !== "" &&
                                <motion.div
                                    animate={ { rotate: 360, opacity: 1 } }
                                    transition={ { duration: 1 } }
                                    className='looser'>
                                    <h2>You are a looser...</h2>
                                    <span>
                                        <FaRegSadCry />
                                    </span>
                                </motion.div>
                            }


                            { this.state.isRestarted && this.state.isAddTimerOver === 0 && (
                                <div className="restart">
                                    { this.showAdd() }
                                </div>
                            ) }

                            {
                                this.state.isRestarted && this.state.isAddTimerOver === 1 &&
                                <div className='restart'>

                                    <h2>Vuoi giocare di nuovo?</h2>

                                    <div className='reastart__container'>
                                        { this.showButtonResetMatch() }
                                        <div>
                                            <Button
                                                label={ "No" }
                                                styleCss={ "action-restart" }
                                                callBackButton={ this.noReplay }
                                            />
                                        </div>
                                    </div>
                                </div>
                            }

                            {
                                this.state.displayButton && !this.state.isRestarted &&
                                // !this.state.isRestarted &&
                                <ContainerButtons
                                    initial={ { opacity: 0, scale: 0.5 } }
                                    animate={ { opacity: 1, scale: 1 } }
                                    transition={ {
                                        duration: 0.8,
                                        delay: 0.5,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    } }
                                    containerButtonsStyle={ "container__buttons" }
                                >

                                    <Button
                                        callBackButton={ this.paper(1) }
                                        label={ "Paper" }
                                        styleCss={ "btn " }
                                        value={ 1 }
                                        styleIconContainer={ "icon" }
                                        icon={ <FaRegHandPaper /> }
                                    />
                                    <Button
                                        callBackButton={ this.paper(2) }
                                        label={ "Scissors" }
                                        styleCss={ "btn" }
                                        value={ "2" }
                                        text={ "scissor" }
                                        styleIconContainer={ "icon" }
                                        icon={ <FaRegHandScissors /> }
                                    />
                                    <Button
                                        callBackButton={ this.paper(0) }
                                        label={ "Rock" }
                                        styleCss={ "btn" }
                                        value={ 0 }
                                        styleIconContainer={ "icon" }
                                        icon={ <FaRegHandRock /> }
                                    />
                                </ContainerButtons>
                            }

                            <div className="container__buttons-classifica-reset">
                                <Button
                                    callBackButton={ this.showScoreList }
                                    label={ "Classifica" }
                                    styleCss={ "btn-icon" }
                                    styleIconContainer={ "icon" }
                                    icon={ <TfiCup /> }
                                />

                                { this.state.isScoresVisible &&
                                    this.mapScoreList()
                                }
                            </div>

                        </div>
                        <div>
                        </div>
                    </div>
                }
            </div >
        )
    }
}



export default withNavigation(Entry)