import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutIconLink from './common/AboutIconLink'
import Footer from './common/Footer'
import Header from './common/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>

        <Footer />
      </BrowserRouter>
    </FeedbackProvider>
  )
}

export default App
