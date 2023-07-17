
import React from 'react'
import FAQItem from './FAQItem'

const FAQList = () => {
  return (
    <section className='container flex flex-col items-center my-20'>
      <div className="w-full lg:max-w-2xl bg-white-shade-2 flex flex-col gap-y-4 lg:gap-6 p-5 rounded-xl">
        <FAQItem
          title={"What is White Snail American all about?"}
          content={"Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."}
        />
        <FAQItem
          title={"Who can use your platform?"}
          content={"Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."}
        />
        <FAQItem
          title={"Why is brand development important for my business?"}
          content={"Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."}
        />
         <FAQItem
          title={"What types of ideas and startups do you invest in?"}
          content={"Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."}
        />
         <FAQItem
          title={"How much funding do you typically provide?"}
          content={"Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."}
        />
         <FAQItem
          title={"What other resources do you provide besides funding?"}
          content={"Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."}
        />
      </div>
    </section>
  )
}

export default FAQList