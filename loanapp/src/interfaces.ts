export interface FormError{
    isValid:boolean,
    message:string | null
}
export interface NavigatorProps {
    verifyForm:()=>FormError
}