export class SnackbarEvent{
    constructor(
        public message: string, 
        public snackType: SnackbarType = SnackbarType.Success, 
        public acknowledgeText: string = 'OK', 
        public duration: number = 2500){
    }    
}
export enum SnackbarType{
    Success, 
    Error
}  