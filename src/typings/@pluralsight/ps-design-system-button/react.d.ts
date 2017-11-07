/// <reference types="react" />

declare module '@pluralsight/ps-design-system-button/react' {
    
      export interface BtnProps {
        appearance?: 'primary' | 'stroke' | 'flat'
        disabled?: boolean
        icon?: any
        iconAlign?: 'left' | 'right'
        innerRef?: any
        size?: 'xSmall' | 'small' | 'medium' | 'large'
        href?: string
        type?: 'button' | 'reset' | 'submit'
      }

      export interface BtnContext {
          themeName: string
      }
    
      export default function Btn(props: BtnProps, context: BtnContext): React.Component<BtnProps>
    }