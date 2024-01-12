from django import forms

from api.models import Product, ProductCategory, MoneyType

class AddProductForms(forms.ModelForm):
    class Meta:
        model = Product
        fields = ('name', 'price', 'photo', 'amount', 'about', 'category', 'moneytype', 'isHave')
        widgets = {
            'name': forms.TextInput(attrs = {
                'class': 'form-control',
                'placeholder': 'Название',
            }),
            'price': forms.NumberInput(attrs = {
                'class': 'form-control',
                'placeholder': 'Цена'
            }),
            'photo': forms.FileInput(attrs = {
                'class': 'form-control',
                'placeholder': 'картинка'
            }),
            'amount': forms.NumberInput(attrs = {
                'class': 'form-control',
                'placeholder': 'Кол-во товара'
            }),
            'about': forms.Textarea(attrs = {
                'class': 'form-control',
                'placeholder': 'О товаре'
            }),
            'category': forms.Select(attrs = {
                'class': 'form-control',
                'placeholder': 'Категория'
            }),
            'moneytype': forms.Select(attrs = {
                'class': 'form-control',
                'placeholder': 'Волюта',
            }),
            'isHave': forms.CheckboxInput(attrs = {
                'placeholder': 'В налиичии ?',
                'id': "isHave"
            })
        }


class EditProductForms(forms.ModelForm):
    class Meta:
        model = Product
        fields = ('name', 'price', 'photo', 'amount', 'about', 'category', 'moneytype', 'isHave')
        widgets = {
            'name': forms.TextInput(attrs = {
                'class': 'form-control',
                'placeholder': 'Изминить Название',
            }),
            'price': forms.NumberInput(attrs = {
                'class': 'form-control',
                'placeholder': 'Изминить Цену'
            }),
            'photo': forms.FileInput(attrs = {
                'class': 'form-control',
                'placeholder': 'Изминить картинку'
            }),
            'amount': forms.NumberInput(attrs = {
                'class': 'form-control',
                'placeholder': 'Изминить Кол-во товара'
            }),
            'about': forms.Textarea(attrs = {
                'class': 'form-control',
                'placeholder': 'Изминить о товаре'
            }),
            'category': forms.Select(attrs = {
                'class': 'form-control',
                'placeholder': 'Изминить Категория'
            }),
            'moneytype': forms.Select(attrs = {
                'class': 'form-control',
                'placeholder': 'Изминить Волюта',
            }),
            'isHave': forms.CheckboxInput(attrs = {
                'placeholder': 'В налиичии ?',
                'id': "isHave"
            })
        } 


class AddCategoryForms(forms.ModelForm):
    class Meta:
        model = ProductCategory
        fields = ('title',)
        widgets = {
            'title': forms.TextInput(attrs = {
                'class': 'form-control',
                'placeholder': "Название категории"
            })
        }


class EditCategoryForms(forms.ModelForm):
    class Meta:
        model = ProductCategory
        fields = ('title',)
        widgets = {
            'title': forms.TextInput(attrs = {
                'class': 'form-control',
                'placeholder': "Изминить название категории"
            })
        }


class AddVoluteForms(forms.ModelForm):
    class Meta:
        model = MoneyType
        fields = ('name',)
        widgets = {
            'name': forms.TextInput(attrs = {
                'class': 'form-control',
                'placeholder': "Название волюты"
            })
        }


class EditVoluteForms(forms.ModelForm):
    class Meta:
        model = MoneyType
        fields = ('name',)
        widgets = {
            'name': forms.TextInput(attrs = {
                'class': 'form-control',
                'placeholder': "Изминить Название волюты"
            })
        }