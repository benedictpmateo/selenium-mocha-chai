export const sendKeys = value => {
    return args => {
      args.sendKeys(value)
    }
}

export const click = () => {
    return args => {
        args.click();
    }
}

export const clear = () => {
    return args => {
        args.clear();
    }
}


