import nextpy as xt

from xtconfig import config
filename = f"{config.app_name}/{config.app_name}.py"
class Binary_to_decimal(xt.State):
    num: str = ''
    decimal:int=0
    alert_message:str='Welcome'
    alert_flag:int=1
    
    def update_num(self,new_num :int):
        if new_num=='':
            self.alert_flag=0
        elif len(new_num)>8:
            self.alert_flag=1
            new_num=str(int(int(new_num)/10))
            self.num=str(int(int(self.num)/10))
            # self.num=new_num
        else:
            for i in new_num:
                if i=='0' or i=='1':
                    self.alert_flag=0
                else:
                    self.alert_flag=1
        if self.alert_flag==1:
            self.alert_message='value error'
        else:
            self.alert_message='Welcome'
            self.num=new_num
        
    
    def binary_to_dec(self):
        self.decimal=0
        self.num = str(self.num)  # ensure the binary number is a string
        for digit in self.num:
            self.decimal = self.decimal*2 + int(digit)
        print(self.decimal)
        


def binary_input():
    return xt.fragment(
        xt.vstack(
        xt.alert(
            title=Binary_to_decimal.alert_message
            )),
        xt.vstack(
        xt.heading('welcome to Binary to dexcimal convertor'),
        xt.vstack(
            xt.input(
                value=Binary_to_decimal.num,
                placeholder='enter number in 0,1',
                on_change=Binary_to_decimal.update_num
                )
            ),
            xt.hstack(
                xt.text(f'decimal: {Binary_to_decimal.decimal}',
                        width='8vw'),
                xt.button('convert',
                          on_click=Binary_to_decimal.binary_to_dec,
                          )
                ),border='1px solid black',
            width='50%',
            margin='auto',
            margin_top='5vh',
            padding_top='3vh',
            padding_bottom='3vh',
            )
        
        )



# define index page. Frontend Pages are just functions that return a frontend components
def index():
    return xt.box(
            binary_input(),
            )

# Global styles defined as a Python dictionary
style = {
    "text_align": "center",  
}


app = xt.App(style=style)
app.add_page(index)
