
import json
from datetime import datetime
import boto3

dynamodb = boto3.resource('dynamodb')


tableMensagens = dynamodb.Table('LancesRUP')


def lambda_handler(event, context):
    date_time = (datetime.now()).strftime("%Y-%m-%d %H:%M:%S")


    usuario = str(event['from'])
    lance = str(event['bid'])

    try:
        tableMensagens.put_item(
            Item={
                'user': usuario, 
                'data_hora': date_time,
                'bid': lance
            }
        )

        return {
            'statusCode': 200,
            'body': json.dumps('Lance de '
                               + usuario
                               + ' no valor '
                               + lance
                               + ' foi inserida no Banco de Dados')
        }

    except:
        print('Erro: lambda function terminada sem sucesso')
        return {
            'statusCode': 400,
            'body': json.dumps('Erro ao tentar processar mensagem')
        }