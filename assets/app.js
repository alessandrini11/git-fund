window.addEventListener("load",() =>{
    let mensuel = document.getElementById("mensuel").getContext("2d");
    let adherents = document.getElementById("adherents").getContext("2d");

    let dataAdherent = new Chart(adherents,{
        type:'doughnut',
        data:{
            labels:['GL','GRT'],
            datasets:[{
                label:"adherents",
                data:['13','10'],
                backgroundColor:[
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                ],
                borderWidth:2,
            }]
        },
        options:{

        },
        scales:{
            y:{
                min:0,
                max:1000000
            }
        }
    })

    let data = new Chart(mensuel,{
        type:'line',
        data:{
            labels:['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'],
            datasets:[{
                label:'montant',
                data:['1000','5000','9500','2000','7000','33000','6000','1500','10000','11000','5000','15000'],
                backgroundColor:"green",
                borderWidth:2,
                borderColor:'green',
                tension:0.2
            }]
        },
        options:{

        },
        scales:{
            y:{
                min:0,
                max:1000000
            }
        }
    })
})