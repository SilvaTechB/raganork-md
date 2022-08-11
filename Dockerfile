FROM quay.io/alien2804/Alien-bot:multidevice

RUN git clone https://github.com/alien2804/Alien-bot-md /skl/Alien
WORKDIR /skl/Alien
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
