#  SimpleCLI

This package is a simple command line interface helper , you can ask a question and validate answer.That is very simple.

**How can i install?**

    npm install @xncn/simplecli

**Let's do a simple example**
```javascript
const  simplecli  =  require('@xncn/simplecli');
simplecli(
    { question:  "What's your instagram username? :", },
    (answer) =>  console.log(`https://www.instagram.com/${answer}`)
);
```
![Example1](https://lh3.googleusercontent.com/BzV4H-X4wpzlNSxL7J0EQdsmjhQHFl_QzT4sj8UiF_hYbtoWAj5aqK-fmSUtPD746CAZKJT-MpLNWqMh2-Tz1BK0PZ78Sx9T0hi3ocwRo1jSb3Ylk7j6jaatyJuEIDxDYk_5jk7Rdeg9xIqtTlbDZLgH-cRChcRE-99IFgmEDQowST3LgZkBx1Gv8v9xHzazYyayO8MWv8OiFCqZ60Tuj_H2YEZvZ7fX1y6WvdYY3X-AtqbCTgH-WKGxKXtr01djhAQpq3a3PiPnYC0ZuEnsZoAD7qI8KvkoGs5WtNiA7tZpcNT4oZ5KtltDYzMUHyW-GJ2hD9Xf-FAK8VHYKlcFpvpFitbqlE-nAcpzuNxe9fVTSlFdNGOrusctDA7vvDrAj2idxQHFxotnu3S8f-sG43CdzMXOuuSdN7tmXvHwZWguOX7Tm07_cAOIyv9k9gWrg8eE6crRK_SFb7W-5dG3jz_e7HpJVPKm2TMmg-qgzcbR_BYGfnqVGpCKT368M9RxRmAzG6mBqdHkYE8WSNtbyWQS_8GskY8_XJMLuaJe-LSaOPwL3kAWTz855LKJMJQXmS9-XqyexbfApHIhMRwnuzViHjBaZu9OZDBnl8G3xcKmwZlDZ4SYE8Xh4YjMnbRrIzmy6lssuVfcM60WOyaIgBCoL_-Ve8S-ei-iLiR2z4-i58wEWgnHiQ=w1140-h694-no)
#### Customize
Let's do some customize.You can customize text color , just send color argument to simplecli.

```javascript
simplecli(
    {
        question: "What's your instagram username? :",
        color: 'cyan'
    },
    (answer) => console.log(`https://www.instagram.com/${answer}`)
);
```
![Color](https://lh3.googleusercontent.com/_koGEIR8_Roy7l9ABImaN0tyu6b68aLf-yyrta-S3hopyNZ1bIQ2rH-JZB0reYyd3FZileYeMue5tNqm3bZ3e-hVPW9vgd2NUCg08bCQowH5dr29G1Auy-cuqIcbysG0b12VO__SSjNLwPVS5SjXRP984-o4o_PEOXnawEePvkTY31Pnvf5Vh56uFn6r0SbjaLUWMK_ZEN0dQyzWXc4C8XQKXudNIiZ0bSUfHVFgCXuuMjKCzks3lfZYafY4TJcgWD3QAaSoMYga6xNNRZeQzEE6an1sJpuUNAretl6FWL0CYHZBLf0uLnc9s0ZosupuQBB6j-SWkn57xcGOhRhYb8D0byQM3Yn_mDJ6qJxb_FCLWxV6eS5Z8-P9Z0KXpkOmQX5pLJt4M522jIQpKy4whfUDuF4ig2ckKelbp611-QylKKdGfZwAmY3Yeb72hYCyYHEAKri0CwLEXlkDp1ZkI7TOT95466vSWCZkXKQEhwXLWXCmj9YrCOHaoJ0RD4QuK5qHge3P1aVpppmFXHy_GuoNRr8ZyaryxI3WOjTOdPCBdVZYz4HSdBYUyJP6BGfYner7commzRrFwSYqgZfXjI1uQgen_qMKP8j8z6DdDnJBPN3--ouejU9_4MdMUMs1p9CunVhRyXwjtxXABSHx9RIkU6a1T560zLRFWNyFmRdYQRV2W3oeVA=w1114-h150-no "Color")

Avaible colors : blue,green,red,yellow,magenta,cyan,white,crimson

And you can customize text weight and underline style.
```json
{
        ...
        bold: true,
        underline: true,
},
```
![](https://lh3.googleusercontent.com/GqaOc0sTOIxOnuo566gKN8aaHkFkJglxagAviCMesVuK4oxdlJbUUrFjuTgAy3OteAOKlLnhwU-utFu9mVWXQ58CAmJxeR7tSGYFnXFRYyKuMZNyz0JNiPhUR0y4sJrSOalp00Cz9-o-fpBvTHp0hef_Ru9SXpecoRR5KYt4YO0QnCGApQn6YG04zj72ZxSmmLP9pjHmhNJVzzy0yfoYDG_vtTSE-vzTcTCn6aoqQJMchALnlimKO0Bs195L-bJ5g0V20URmKCQsgUzg8Qd3eK2ho4Gtyr_LMp3fCTZTOEfbaEUfx5m38xzetVk3locqGptaaZJ5lmwJZXD6cG9FeQ5dBrx8DKm81ZmAIA80l69rw94DJ2i_0N4-zLdL9YzxXUJoyRW1mIYSG-k784ySbys8rUkGJldc-DrYvcJnvONeBDidri2sGuF46wYywV84krCV_lbPqCA3AbMdWobCWknQ69SzN9wb1uFoaYQYioNHfaWEl7fMYKTJZ_tlfSMOKYLhGZ8TAgVKMiwrT_Mm9uMVg7EMXYTj1S5_Jvvti7N6lkACrKUSy9SLWabu4_SZWeFgmzapgR5tXULekEL88CY_30CdRxzo2tAkiYxSG1PGYwHj0P470XEUyPQIXvkJrQqWt2Tx6cHCKlgxEaEVeyjdElO72zP8IrqWrrAbOSZo4o0Hhacxyg=w1114-h150-no)

### Validation
Simplecli includes [Validator](https://www.npmjs.com/package/Validator "Validator") library, you can validate your data it's so easy.Lets do a exampleİf you want do validation you pass second argument , you can use a callback function.Function includes two arguments they are user prompt and validation errors.
```javascript
simplecli(
    {
        question: "How old are you? :",
        color: 'cyan',
        bold: true,
        underline: true,
        validationRules: 'required|numeric|max:50|min:18'
    },
    (answer, err) => {
        if (err != true) { console.log(err); return; }
        console.log(`Good you are ${answer} years old , you can do this action:)`);
    }
);
```
![validation](https://lh3.googleusercontent.com/vin9T-5IdYpCQB1CHsConTc_X876tyK0x9vrGRDQWJUHtRbX62Gtl8bT8lgHoBo6H_zxgMvloQGwL5ZAR_HRpSD831h1OO3zvceis2ry-1jdgwZHFh4Bj2YRTVnNIXMQyPrLhAQRnLYyHj1yj4m54pzSdcSU9yT5xbqxhWMqJj_6NryysUuUP_Hj7YH9oyxXHrMUG7L49y6DCiHEMMUMUVSqInXu3OO0_jIMe3icyCx-N90O-evv2ZCeDaE59omaQnHpBUHDa4ki8TevJpj4-1wFELaxCrWfwVvx1NC9PpmyZxRszdRqzawiccuMgnOYR_CbyB9CCMmRdu8HMNt4vOBfHeArQ5TQvWEUxUCFF1SqOf0sWd5A-bqx_X5o7HEoKVhyPndqPJCkvmtC4XuQh4wbVpl3Jy3jGkH7kKPG-Mu1S3-0XPpaUpQf8WRCCKcSi4rQviHmdDuYUUvRaVV3TYVp53B_Nz-houkB7mye6iAv_q81JmOilp6MGGw7urg7AuX2MfeUfZOAw6J8AAOGPvpkDgssAC3-61reSNEKmBy7MPKUxAtEG9Bny8ZomevyWMdxkQOdy0pw2udTg2ZC6-GEhJEzEyJBfOHyoeotF6nTpnjZOfGgRrhd0PGh5fyDPS1Jz4a_1OSAIFevy1wJ6_oUwHjI4SKob-pcIY2-WzG0bLASK1aCEg=w549-h334-no "validation")

#### Supported Validation Rules
See validation rule usage in [Laravel Documentation](https://laravel.com/docs/5.2/validation#available-validation-rules "Laravel Documentation")

- accepted
- after (date)
- alpha
- alpha_num
- alpha_dash
- array
- before (date)
- between
- boolean
- confirmed
- date
- different
- digits
- digits_between
- email
- filled
- in
- integer
- ip
- json
- max
- min
- not_in
- numeric
- present
- regex
- required
- required_if
- required_unless
- required_with
- required_with_all
- required_without
- required_without_all
- same
- size
- string
- url
