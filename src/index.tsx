import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import './shared/config/i18n/i18n'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
)
