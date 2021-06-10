import { useEffect, useState } from 'react';

// Storage
import Storage from '../utils/AsyncStorage';

function useLogin() {
    const [isLogIn, setIsLogIn] = useState<string>('');

    useEffect(() => {
        (async () => {
            await Storage.instance.get('logIn')
                .then((response) => {
                    if (response !== null && response !== undefined) {
                        setIsLogIn(response);
                    }
                });
        })();
    }, []);

    return {
        isLogIn
    }
}

export default useLogin;