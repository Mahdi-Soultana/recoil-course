import {ChakraProvider} from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {RecoilRoot} from 'recoil'
import Canvas from './Canvas'
import Atoms from './examples/Atoms'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ChakraProvider>
                <Router>
                    <Switch>
                        <Route path="/examples/atoms">
                            <Atoms />
                        </Route>
                        <Route>
                            <Canvas />
                        </Route>
                    </Switch>
                </Router>
            </ChakraProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
)
