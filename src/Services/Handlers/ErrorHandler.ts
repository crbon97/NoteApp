export namespace ErrorHandler {
  export const HandleAuthError: (error: any) => void = (error: any): void => {
    console.error(error);
  };

  export const RejectError: (error: any) => Promise<any> = (
    error: any,
  ): Promise<any> => {
    return Promise.reject(error);
  };
}
