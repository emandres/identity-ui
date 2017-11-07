declare module 'react-styleable' {

  export interface StyleableProps {
    css?: any
  }

  export default function styleable(css: any): any
}