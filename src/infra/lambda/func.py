import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('andykuo-blog')


def lambda_handler(event, context):
    response = table.update_item(
        Key={
            'id': '1'
        },
        UpdateExpression="SET #v = #v + :inc",
        ExpressionAttributeNames={
            '#v': 'views'
        },
        ExpressionAttributeValues={
            ':inc': 1
        },
        ReturnValues="UPDATED_NEW"
    )

    views = response['Attributes']['views']
    print(views)

    return views
