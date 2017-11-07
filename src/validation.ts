type ValidationTarget = {
    [_: string]: string
}

type ValidationResult = { valid: boolean, message?: string }

const Success: ValidationResult = { valid: true }
function failure(message: string): ValidationResult {
    return { valid: false, message }
}

export function required(value: string, message?: string): ValidationResult {
    return value.trim() !== '' 
        ? Success 
        : failure(message || "Required")
}

export function email(value: string, message?: string): ValidationResult {
    return !!value.trim().match(/^\S+@\S+\.\S{2,63}$/) 
        ? Success
        : failure(message || "Must be an email address")
}

function match <T extends ValidationTarget, K extends keyof T>(...keys: K[]){
    return (model: T, message?: string) => {
        return model[keys[0]] === model[keys[1]]
        ? Success
        : failure(message || "Must match")
    }
}

type FieldValidationRule = (value: string, message?: string) => ValidationResult
type ModelValidationRule<T extends ValidationTarget> = (model: T, message?: string) => ValidationResult

type ValidationModel<T extends ValidationTarget> = 
    { [_ in keyof T]: ValidationResult } 
    & { _model: ValidationResult }

type ValidationRules<T extends ValidationTarget> = 
    { [_ in keyof T]?: [FieldValidationRule] } 
    & { _model?: [ModelValidationRule<T>]}

type X = { a: string, b: string }

let xValidationRules : ValidationRules<X> = {
    a: [required],
    b: [required, email],
    _model: [match("a", "b")]
}
