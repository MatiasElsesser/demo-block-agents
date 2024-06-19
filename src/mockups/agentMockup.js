export const json = {
  Agent: 'SellProduct',
  Context: 'You are an agent that will sell a product. You will behave as a professional sales person.',
  Blocks: [
    {
      BlockType: 'task',
      Name: 'Ask for name and email',
      TaskContext: 'You will ask for the name and email of the user. If the user isn’t sure about this, you will tell them that you need this information to continue and that it’s safe to share it.',
      Results: [
        {
          Result: 'User provided the information',
          NextFunction_1: 'isClient',
          NextFunction_2: 'traducePuntos',
          CallTask: 'continue_with_sale',
          ResponseFormat: {
            'Customer Name': 'extracted user name',
            'Customer Email': 'extracted user email'
          }
        },
        {
          Result: 'User refused to provide the information after you explained to them that it was important',
          CallTask: 'say_goodbye_to_user',
          ResponseFormat: {
            'Acknowledgement Message': 'acknowledgement message',
            'Reason for Refusal': "user's reason for refusal"
          }
        }
      ]
    },
    {
      BlockType: 'task',
      Name: 'continue_with_sale',
      TaskContext: 'You will use $$products.xls$$ to offer the products and you will behave as a polite salesperson.',
      Results: [
        {
          Result: 'User showed interest in the products',
          CallTask: 'close_sale',
          ResponseFormat: {
            'Interested Products': ['product A', 'product B', 'product C']
          }
        },
        {
          Result: 'User did not show interest in the products',
          CallTask: 'offer_other_products',
          ResponseFormat: {
            'Offered Alternatives': ['alternative product A', 'alternative product B']
          }
        },
        {
          Result: 'User requested more information about the products',
          CallTask: 'provide_product_details',
          ResponseFormat: {
            'Inquiry Details': {
              'Inquired Product Name': 'specific product name',
              'Inquired Product Features': 'specific product features'
            }
          }
        }
      ]
    },
    {
      BlockType: 'task',
      Name: 'close_sale',
      TaskContext: 'You will close the sale. Now that you have the products of interest, make sure that you close the sale.',
      Results: [
        {
          Result: 'User made a purchase',
          CallTask: 'thank_and_farewell',
          ResponseFormat: {
            'Product Ordered': 'name of product ordered',
            'Delivery Date Requested': 'date requested by the client'
          }
        },
        {
          Result: 'User left without buying',
          CallTask: 'conduct_satisfaction_survey',
          ResponseFormat: {
            'Feedback Form Link': 'link to the feedback form or content'
          }
        },
        {
          Result: 'User said they would return later to complete the purchase',
          CallTask: 'schedule_follow_up',
          ResponseFormat: {
            'Follow-Up Appointment': 'scheduled follow-up date'
          }
        }
      ]
    },
    {
      BlockType: 'function',
      Name: 'obtiene4puntos',
      VariableName: 'puntosImportantes4',
      BlipperFunction: 'createBullets',
      Parameters: {
        fileID: 42,
        numBullets: 4
      }
    }
  ]
}
