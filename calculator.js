let calculation = '';
        function displayCalculation() {
            if (calculation === undefined) {
                calculation = 'Please insert a numerical expression.'
            } else{
            document.querySelector('.js-calculation').innerHTML = calculation;}
            
        };
        function type(character) {
            if(calculation.length < 144){
            if(calculation === '_'){
                calculation = '';
            };
            calculation+=character;
            displayCalculation();}
            else{document.querySelector('.js-too-long-message').classList.add('too-long-message-appear')}
        };
         
        
        function typeNumber(){
            if(Number(event.key)){type(String(event.key))}
            else if(event.key === '0'){type(event.key)};
        }
        function typeSymbol(){
            if(event.key === '+'){type('+')}
            else if (event.key === '-'){type('-')}
            else if (event.key === '*'){type('*')}
            else if (event.key === '/'){type('/')}
            else if (event.key === 'Enter' || event.key === '='){
                calculation = eval(calculation);
                displayCalculation();  
            }
            else if (event.key === '.'){type('.')}
        }
        function removePopup(){
            document.querySelector('.js-too-long-message').classList.remove('too-long-message-appear');
        }
        document.addEventListener("keydown", event =>{
            typeNumber();
            typeSymbol();
            if(event.key === 'Backspace'){if(Number(calculation.length < 2)){calculation = '_'; displayCalculation()}
            else {calculation = calculation.substring(0,Number(calculation.length - 1)); 
                displayCalculation();
                removePopup()
            }}
            if(event.key === 'x'){
                if(calculation){
                    calculation = '';
                    document.querySelector('.js-calculation').innerHTML = 'Cleared.';
                    removePopup();
                };    
            }
        }
        );
        function resize (){
            const body = document.querySelector('.js-body');
            body.style.height = window.innerHeight;
            body.style.width = window.innerWidth;
        }
        window.onresize = resize()
 
