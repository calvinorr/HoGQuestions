import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('should render Vite + React heading', () => {
    render(<App />)
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Vite + React')
  })

  it('should render initial count as 0', () => {
    render(<App />)
    
    expect(screen.getByText('count is 0')).toBeInTheDocument()
  })

  it('should increment count when button is clicked', async () => {
    render(<App />)
    
    const button = screen.getByRole('button', { name: /count is/i })
    
    fireEvent.click(button)
    
    expect(screen.getByText('count is 1')).toBeInTheDocument()
  })

  it('should increment count multiple times', async () => {
    render(<App />)
    
    const button = screen.getByRole('button', { name: /count is/i })
    
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    
    expect(screen.getByText('count is 3')).toBeInTheDocument()
  })

  it('should render both logos with correct links', () => {
    render(<App />)
    
    const viteLink = screen.getByRole('link', { name: /vite logo/i })
    const reactLink = screen.getByRole('link', { name: /react logo/i })
    
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev')
    expect(reactLink).toHaveAttribute('href', 'https://react.dev')
  })

  it('should have links open in new tab', () => {
    render(<App />)
    
    const links = screen.getAllByRole('link')
    
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
