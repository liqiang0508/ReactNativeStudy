import { Alert } from 'react-native';
export default class utils {

    static show() {
        console.log("utils show******");
        
    }


    static DelayFun(call, time) {
        var timer = setTimeout(
            () => {
                if (call) {

                    call()
                }
            },
            time
        );

        return timer;
    }


    static Add(a,b)
    {

        return (a+b);
    }

    static showAlert(title,message,buttons)
    {
        Alert.alert(title,message,buttons)
    }

}