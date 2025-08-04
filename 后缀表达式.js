     // 将中缀表达式装换为后缀表达式
        // let str = prompr()
        const str = '2×5×4÷2+1-3×2'
        // 定义运算优先级
        const grade = {
            '+':1,
            '-':1,
            '×':2,
            '÷':2
        }
        const arr = str.split('')
        const endarr = []
        const oparr = []
        console.log(arr);

        
        arr.map((a,index) => {
            // 如果a是数字
            if(/\d+/.test(a)){
                endarr.push(a)
            }
            // 如果a是符号
            else if(a in grade){
                // 如果符号a的优先级大于栈顶符号的优先级，则入栈，栈空也入栈
                    if(grade[a] > grade[oparr[oparr.length-1]] || oparr.length == 0){
                        oparr.push(a)
                        // console.log(oparr);
                    }else{
                        // 按顺序出栈
                        for(let j=oparr.length-1;j>=0;j--){
                            endarr.push(oparr[j])
                        }
                        // 清空栈
                        oparr.splice(0,oparr.length)
                        // 入栈
                        oparr.push(a)
                        console.log(endarr);
                        
                       
                        // 修正后的运算符处理逻辑
                        // while (oparr.length > 0 && grade[oparr[oparr.length-1]] >= grade[a]) {
                        //     endarr.push(oparr.pop());
                        // }
                        // oparr.push(a);
                        
                        
                        
                        // 最终处理剩余运算符
                    //     while (oparr.length > 0) {
                    //         endarr.push(oparr.pop());

                            
                    //     }
                    // }
            }
            // 把最后一次遍历的符号数组按顺序入栈入栈
            //     if (index == arr.length - 1) {
            //         // 按顺序出栈
            //         for (let q = oparr.length - 1; q > 0; q--) {
            //             endarr.push(oparr[q])
            //         }
            //     }
            //  console.log(oparr);
        }
         if (index === arr.length - 1) {
                // 按顺序出栈
                for (let q = oparr.length - 1; q >= 0; q--) {
                    endarr.push(oparr[q])
                }
            }
            console.log(endarr);
})
        console.log(endarr);
        console.log(oparr);


        // 运算后缀表达式
        // let sum = 0
        const totalarr = []
        // 修改后统一处理方式
        endarr.map((c) => {
            if(/\d+/.test(c)){
                totalarr.push(Number(c))
            } else {
                // 按序取出栈顶两个的元素，后取出的做被运算数
                const b = totalarr.pop()
                const a = totalarr.pop()
                // 运算后入栈
                switch(c) {
                    case '+': totalarr.push(a + b); break;
                    case '-': totalarr.push(a - b); break; 
                    case '×': totalarr.push(a * b); break;
                    case '÷': totalarr.push(a / b); break;
                }
            }
        })

        const sum = totalarr.pop();
        console.log('计算结果：', sum);

    
    console.log(sum);
    

    
    
    

    
