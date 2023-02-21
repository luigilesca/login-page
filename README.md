# Informazioni sul progetto
 - Il file dell'app principale è nella cartella screens -> EntryApp.js
 - il file css dei EntryApp è nella cartella styles/entryApp/entryApp.css
 - I componenti più piccoli come bottoni o input sono nella cartella components. Insieme ci sono anche i css
 - Nella cartella utils è presente una funzione per il localStorage e per il getStorage e una funzione per il routing nel componente di classe (in caso servissero)

# IMPORTANTE per il componente Input
- Il componente per gestire l'input si chiama NewInput. In EntryApp riceve diverse props. 
Per gestire l'email, NewInput riceve come type ="text" e non "email". E' importante tenere type="text" per gestire l'animazione nel css, dato che è presente la proprietà required nel componente NewInput.

# STATI e Variabili di EntryApp
- tutte le variabili globali iniziano con la parola var (ad esempio this.varEmptyEmail)

        this.varPasswordEmpty = true;            // variabile di controllo se la password è vuota
        this.varEmailEmpty = true;               // variabile di controllo se l'email  è vuota
        this.varEmailValid = true;               // variabile di controllo se l'email  è valida (Controllo regex)
        this.varTypePasswordField = "password"   // variabile di stato per settare il field password a type "text" o "password per
                                                 // permettere la visibilità quando si schiaccia l'occhio

        this.state = {
            email: "",                           // stato per memorizzare l'email (in futuro da passare come stato: sicurezza)
            password: "",                        // stato per memorizzare la password (in futuro da passare come stato: sicurezza)
            isPasswordVisible: false,            // stato per rendere visibile o meno la password tramite l'occhio
            isEmailValid: false,                 // stato per verificare la validità dell'email (regex)
            isEmailEmpty: true,                  // stato per verificare il riempimento dell'email
            isPasswordEmpty: true,               // stato per verificare il riempimento della password
            rememberMe: false,                   // stato per gestire il "ricordami" dalla checknox
            checkErrorPassword: true,            // stato per gestire la scritta d'errore in caso di inserimento errato della password
            checkErrorEmail: true,               // stato per gestire la scritta d'errore in caso di inserimento errato dell'email
            typePasswordField: "password"        // stato per memorizzare la variabile varTypePasswordField (vedi sopra)
        }
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
